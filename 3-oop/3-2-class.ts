{
	/*내가 시도한 방법*/
	// type coffeeCup={
	// 	shots:number;
	// 	hasMilk: boolean;
	// }

	// const BEANS_GRAM_PER_SHOT = 7;

	// class coffeeMachine{
	// 	coffeeBeans:number;

	// 	constructor(){
	// 		this.coffeeBeans = 0;
	// 	}

	// 	makeCoffee(shots:number):coffeeCup{
	// 		if(this.coffeeBeans < BEANS_GRAM_PER_SHOT*shots){
	// 			throw new Error('not enough coffee beans');
	// 		}
	// 		this.coffeeBeans -= BEANS_GRAM_PER_SHOT*shots;
	// 		return {
	// 			shots,
	// 			hasMilk:false
	// 		}
	// 	}
	// }

	// const CoffeeMachine = new coffeeMachine();
	// CoffeeMachine.coffeeBeans += BEANS_GRAM_PER_SHOT*3;
	// const coffee = CoffeeMachine.makeCoffee(2);
	// console.log(coffee);



	type coffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	class coffeeMaker{
		static BEANS_GRAM_PER_SHOT = 7; //class level
		coffeeBeans:number = 0; //instance(object) level
		constructor(coffeeBeans:number){
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans:number){
			return new coffeeMaker(coffeeBeans);
		}

		makeCoffee(shots:number):coffeeCup{
		if(this.coffeeBeans < coffeeMaker.BEANS_GRAM_PER_SHOT*shots){
			throw new Error('not enough coffee beans');
		}
		this.coffeeBeans -= coffeeMaker.BEANS_GRAM_PER_SHOT*shots;
		return {
			shots,
			hasMilk:false
		}
	}
	}

	const maker = new coffeeMaker(32);
	console.log(maker);
	const maker2 = new coffeeMaker(14);
	console.log(maker2);

	const maker3 = coffeeMaker.makeMachine(25);
	console.log(maker3);
}
