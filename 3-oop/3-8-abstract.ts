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
	abstract class CoffeeMachine implements CoffeeMaker {
		private static BEANS_GRAM_PER_SHOT = 7; //class level
		private coffeeBeans: number = 0; //instance(object) level
		constructor(coffeeBeans: number) {
			this.coffeeBeans = coffeeBeans;
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

		protected abstract extract(shots: number): coffeeCup;

		makeCoffee(shots: number): coffeeCup {
			this.grindBeans(shots);
			this.preheat();
			return this.extract(shots);
		}
	}

	class CoffeLatteMachine extends CoffeeMachine {
		constructor(coffeeBeans: number, public readonly serialNumber: string) {
			super(coffeeBeans);
		}
		private steamMilk(): void {
			console.log('steaming some milk...?');
		}

		protected extract(shots: number): coffeeCup {
			this.steamMilk();
			return {
				shots,
				hasMilk: true,
			};
		}
	}

	class SweetCoffeeMaker extends CoffeeMachine {
		protected extract(shots: number): coffeeCup {
			return {
				shots,
				hasSugar: true,
			};
		}
	}

	const machines: CoffeeMaker[] = [
		new CoffeLatteMachine(16, '1'),
		new SweetCoffeeMaker(16),
		new CoffeLatteMachine(16, '2'),
		new SweetCoffeeMaker(16),
	];
	machines.forEach((machine) => {
		console.log('------------------');
		machine.makeCoffee(1);
	});
}
