{
	type coffeeCup = {
		shots: number;
		hasMilk: boolean;
	}

	//private, protect, public
	class coffeeMaker{
		private static BEANS_GRAM_PER_SHOT = 7; //class level
		private coffeeBeans:number = 0; //instance(object) level
		private constructor(coffeeBeans:number){
			this.coffeeBeans = coffeeBeans;
		}

		static makeMachine(coffeeBeans:number){
			return new coffeeMaker(coffeeBeans);
		}

		fillCoffeeBeans(coffeeBeans:number){
			if(coffeeBeans<0){
				return new Error('value for beans should be greater than 0')
			}
			this.coffeeBeans+=coffeeBeans;
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

	// const maker = new coffeeMaker(32);
	const maker = coffeeMaker.makeMachine(32);
	maker.fillCoffeeBeans(32);

	class User{
		get fullName():string{
			return `${this.firstName} ${this.lastName}`
		}
		private internalAge = 4;
		get age():number{
			return this.internalAge;
		}
		set age(num:number){
			this.internalAge = num;
		}

		constructor(private firstName:string, private lastName:string){}
	}
	const user = new User('Steve','Jobs');
	user.age = 6;
	console.log(user.age)
}
