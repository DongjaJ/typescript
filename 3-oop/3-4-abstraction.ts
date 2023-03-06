{
	type coffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	interface CoffeeMaker{
		makeCoffee(shots:number):coffeeCup;
	}

	interface CommercialCoffeeMaker{
		makeCoffee(shots:number):coffeeCup;
		fillCoffeeBeans(coffeeBeans:number):void;
		clean():void;
	}

	//private, protect, public
	class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker{
		private static BEANS_GRAM_PER_SHOT = 7; //class level
		private coffeeBeans:number = 0; //instance(object) level
		private constructor(coffeeBeans:number){
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans:number){
			return new CoffeeMachine(coffeeBeans);
		}

		fillCoffeeBeans(coffeeBeans:number){
			if(coffeeBeans<0){
				return new Error('value for beans should be greater than 0')
			}
			this.coffeeBeans+=coffeeBeans;
		}

		clean(): void {
			console.log('cleaning machine...?');
		}

		private grindBeans(shots:number){
			console.log(`grinding beans for ${shots}`)
			if(this.coffeeBeans < CoffeeMachine.BEANS_GRAM_PER_SHOT*shots){
				throw new Error('not enough coffee beans');
			}
			this.coffeeBeans -= CoffeeMachine.BEANS_GRAM_PER_SHOT*shots;
		}

		private preheat(){
			console.log('heating up...?');
		}

		private extract(shots:number):coffeeCup{
			console.log(`polling ${shots} shots... `)
			return {
				shots,
				hasMilk:false
			}
		}
		makeCoffee(shots:number):coffeeCup{
		this.grindBeans(shots);
		this.preheat();
		return this.extract(shots);
		}
	}

	class AmateurUser{
		constructor(private machine: CoffeeMaker){}
		makeCoffee(){
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
		}
	}
	class ProBarista{
		constructor(private machine: CommercialCoffeeMaker){}
		makeCoffee(){
			const coffee = this.machine.makeCoffee(2);
			console.log(coffee);
			this.machine.fillCoffeeBeans(30);
			this.machine.clean();
		}
	}

	const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
	const amateur = new AmateurUser(maker);
	const pro = new ProBarista(maker);
	// amateur.makeCoffee();
	pro.makeCoffee();

}
