Array;
[1, 2].map;

type Student = {
	passed: boolean;
};

const students: Student[] = [
	{ passed: true },
	{ passed: true },
	{ passed: true },
];
const result = students.every((student) => student.passed);
console.log(result);

class Animal {}
class Cat extends Animal {
	isCat: boolean = true;
}

class Dog extends Animal {
	isDog: boolean = true;
}

const animals: Animal[] = [new Cat(), new Cat(), new Cat()];

function isCat(animal: Animal): animal is Cat {
	return (animal as Cat).isCat !== undefined;
}

console.log(animals.every<Cat>(isCat));
