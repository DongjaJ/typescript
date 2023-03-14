interface Employee {
	pay(): void;
}

class FullTimeEmployee implements Employee {
	pay() {
		console.log(`full time!!`);
	}
	wortFullTime() {}
}

class PartTimeEmployee implements Employee {
	pay(): void {
		console.log(`part time!!`);
	}

	wortPartTime() {}
}

// fulltime인지 parttime인지 정보 잃어버림
// 세부적인 타입을 받아서 추상적인 타입으로 리턴하는 함수는 매우매우 안좋음
function payBad(employee: Employee): Employee {
	employee.pay();
	return employee;
}

//Employee 확장한 제네릭만 가능
function pay<T extends Employee>(employee: T): T {
	employee.pay();
	return employee;
}

const eliie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
eliie.wortFullTime();
bob.wortPartTime();

const eliieAfterPay = pay(eliie);
const bobAfterPay = pay(bob);

const obj = {
	name: 'ellie',
	age: 20,
};

const obj2 = {
	animal: '🐶',
};

//조건부 generic constrain
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

console.log(getValue(obj, 'name'));
console.log(getValue(obj, 'age'));
console.log(getValue(obj2, 'animal'));
