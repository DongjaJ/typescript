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
		constructor(
			private coffeeBeans: number,
			private milk: MilkFrother,
			private sugar: SugarProvider
		) {}

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
			const coffee = this.extract(shots);
			const addSugar = this.sugar.addSugar(coffee);
			return this.milk.makeMilk(addSugar);
		}
	}

	interface MilkFrother {
		makeMilk(cup: coffeeCup): coffeeCup;
	}

	interface SugarProvider {
		addSugar(cup: coffeeCup): coffeeCup;
	}

	//싸구려 우유 거품기
	class CheapMilkSteamer implements MilkFrother {
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

	class NoMilk implements MilkFrother {
		makeMilk(cup: coffeeCup): coffeeCup {
			return cup;
		}
	}

	class FancyMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log('Fancy steaming some milk...?');
		}
		makeMilk(cup: coffeeCup): coffeeCup {
			const milk = this.steamMilk();
			return {
				...cup,
				hasMilk: true,
			};
		}
	}

	class ColdMilkSteamer implements MilkFrother {
		private steamMilk(): void {
			console.log('Fancy steaming some milk...?');
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
	class CandySugarMixer implements SugarProvider {
		private getSugar() {
			console.log('Getting some sugar from candy candy 🍭');
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

	class SugarMixer implements SugarProvider {
		private getSugar() {
			console.log('Getting some sugar from candy jar!!!');
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

	class NoSugar implements SugarProvider {
		addSugar(cup: coffeeCup): coffeeCup {
			return cup;
		}
	}

	// Milk
	const cheapMilkMaker = new CheapMilkSteamer();
	const fancyMilkMaker = new FancyMilkSteamer();
	const coldMilkMaker = new ColdMilkSteamer();
	const noMilk = new NoMilk();

	//Sugar
	const candySugar = new CandySugarMixer();
	const sugar = new SugarMixer();
	const noSugar = new NoSugar();

	//machine
	const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
	const sweetMachine = new CoffeeMachine(12, noMilk, sugar);

	const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
	const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
	const sweetLatteMachine = new CoffeeMachine(12, cheapMilkMaker, candySugar);
}
