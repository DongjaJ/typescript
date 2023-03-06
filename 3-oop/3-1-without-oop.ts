{

	type coffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	const BEANS_GRAM_PER_SHOT = 7;
	let coffeeBeans:number = 0;

	function makeCoffee(shots:number):coffeeCup{
		if(coffeeBeans < BEANS_GRAM_PER_SHOT*shots){
			throw new Error('not enough coffee beans');
		}
		coffeeBeans -= BEANS_GRAM_PER_SHOT*shots;
		return {
			shots,
			hasMilk:false
		}
	}

	coffeeBeans += BEANS_GRAM_PER_SHOT*3;
	const coffee = makeCoffee(2);
	console.log(coffee);
}
