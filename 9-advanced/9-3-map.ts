{
	type Video = {
		title: string;
		author: string;
	};

	// [1,2].map(item=>item*item); //[1,4]
	type Optional<T> = {
		[P in keyof T]?: T[P]; // for...in
	};

	type ReadOnly<T> = {
		readonly [P in keyof T]: T[P];
	};

	type VideoOptional = Optional<Video>;

	type Animal = {
		name: string;
		age: number;
	};
	const animal: Optional<Animal> = {
		name: 'dog',
	};
	animal.name = 'dongja';

	const video: ReadOnly<Video> = {
		title: 'hi',
		author: 'Dongja',
	};
	//video.title = 'dongja'; // 변경 불가
	// type VideoOptional = {
	// 	title?: string;
	// 	author?: string;
	// 	description?: string;
	// };

	// type VideoReadOnly = {
	// 	readonly title: string;
	// 	readonly author: string;
	// };

	// title, author: type string => error
	// const obj3:Video={
	// 	title:null;
	// 	author:null;
	// }

	type Nullable<T> = { [P in keyof T]: T[P] | null };

	const obj2: Nullable<Video> = {
		title: null,
		author: null,
	};

	type Proxy<T> = {
		get(): T;
		set(value: T): void;
	};

	type Proxify<T> = {
		[P in keyof T]: Proxy<T[P]>;
	};
}
