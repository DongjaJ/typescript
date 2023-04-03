{
	const obj1 = {
		name: 'ellie',
	};
	obj1.name; // 'ellie
	obj1['name']; // ellie

	type Animal = {
		name: string;
		age: number;
		gender: 'male' | 'female';
	};

	type Name = Animal['name']; // string
	const text: Name = 'hello';
	//const text:Name= 12 //error!

	type Gender = Animal['gender']; // 'female' | 'male'

	type keys = keyof Animal; //'name' | 'age' | 'gender'

	const key: keys = 'age';

	type Person = {
		name: string;
		gender: Animal['gender'];
	};

	const person: Person = {
		name: 'dongja',
		gender: 'male',
	};
}
