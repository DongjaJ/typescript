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

	const maker:CoffeeMachine = CoffeeMachine.makeMachine(32);
	maker.fillCoffeeBeans(32);
	maker.makeCoffee(2);

	const maker2:CoffeeMaker = CoffeeMachine.makeMachine(32);
	// maker2.fillCoffeeBeans(32);
	maker2.makeCoffee(2);
}
