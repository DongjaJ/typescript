{
	type coffeeCup = {
		shots: number;
		hasMilk?: boolean;
		hasSugar?: boolean;
	};

	interface CoffeeMaker {
		makeCoffee(shots: number): coffeeCup;
	}

	//private, protect, public
	class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT = 7; //class level
		// private coffeeBeans:number = 0; //instance(object) level
		constructor(private coffeeBeans: number) {}

		static makeMachine(coffeeBeans: number) {
			return new CoffeeMachine(coffeeBeans);
		}

		fillCoffeeBeans(coffeeBeans: number) {
			if (coffeeBeans < 0) {
				return new Error('value for beans should be greater than 0');
			}
			this.coffeeBeans += coffeeBeans;
		}

		clean(): void {
			console.log('cleaning machine...?');
		}

		private grindBeans(shots: number) {
			console.log(`grinding beans for ${shots}`);
			if (this.coffeeBeans < CoffeeMachine.BEANS_GRAM_PER_SHOT * shots) {
				throw new Error('not enough coffee beans');
			}
			this.coffeeBeans -= CoffeeMachine.BEANS_GRAM_PER_SHOT * shots;
		}

		private preheat() {
			console.log('heating up...?');
		}

		private extract(shots: number): coffeeCup {
			console.log(`polling ${shots} shots... `);
			return {
				shots,
				hasMilk: false,
			};
		}
		makeCoffee(shots: number): coffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	//싸구려 우유 거품기
	class cheapMilkSteamer {
		private steamMilk(): void {
			console.log('steaming some milk...?');
		}
		makeMilk(cup: coffeeCup): coffeeCup {
			const milk = this.steamMilk();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	//설탕 제조기
	class AutomaticSugarMixer {
		private getSugar() {
			console.log('Getting some sugar from candy candy ?');
			return true;
		}
		addSugar(cup: coffeeCup): coffeeCup {
			const sugar = this.getSugar();
			return {
				...cup,
				hasSugar: sugar,
			};
		}
	}

	class CoffeLatteMachine extends CoffeeMachine {
		constructor(
			coffeeBeans: number,
			public readonly serialNumber: string,
			private milkFrother: cheapMilkSteamer
		) {
			super(coffeeBeans);
		}

		makeCoffee(shots: number): coffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.milkFrother.makeMilk(coffee);
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		constructor(coffeeBeans: number, private sugar: AutomaticSugarMixer) {
			super(coffeeBeans);
		}
		makeCoffee(shots: number): coffeeCup {
			const coffee = super.makeCoffee(shots);
			return this.sugar.addSugar(coffee);
		}
	}

	class SweetCaffeLatteMachine extends CoffeeMachine {
		constructor(
			coffeeBeans: number,
			private milk: cheapMilkSteamer,
			private sugar: AutomaticSugarMixer
		) {
			super(coffeeBeans);
		}

		makeCoffee(shots: number): coffeeCup {
			const coffee = super.makeCoffee(shots);
			const sugarAdded = this.sugar.addSugar(coffee);
			return this.milk.makeMilk(sugarAdded);
		}
	}

	const machines: CoffeeMaker[] = [
		new CoffeeMachine(16),
		new CoffeLatteMachine(16, '1'),
		new SweetCoffeeMaker(16),
		new CoffeeMachine(16),
		new CoffeLatteMachine(16, '2'),
		new SweetCoffeeMaker(16),
	];
	machines.forEach((machine) => {
		console.log('------------------');
		machine.makeCoffee(1);
	});
}
