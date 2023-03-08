{
	type coffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	interface CoffeeMaker{
		makeCoffee(shots:number):coffeeCup;
	}


	//private, protect, public
	class CoffeeMachine implements CoffeeMaker{
		private static BEANS_GRAM_PER_SHOT = 7; //class level
		private coffeeBeans:number = 0; //instance(object) level
		constructor(coffeeBeans:number){
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
			console.log('heating up...🔥');
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

	class CoffeLatteMachine extends CoffeeMachine{
		constructor(coffeeBeans:number, public readonly serialNumber:string){
			super(coffeeBeans);
		}
		private steamMilk():void{
			console.log('steaming some milk...🥛')
		}

		makeCoffee(shots: number): coffeeCup {
			const coffee = super.makeCoffee(shots);
			this.steamMilk();
			return{
				...coffee,
				hasMilk:true
			}
		}
	}

	const machine = new CoffeeMachine(23)
	const latteMachine = new CoffeLatteMachine(23, '1');
	const coffee = latteMachine.makeCoffee(1);
	console.log(coffee)
}
