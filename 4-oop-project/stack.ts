{
	interface IStack {
		push(value: string): void;
		pop(): string;
		readonly size: number;
	}

	class Node {
		constructor(public value: string, public next: Node | null = null) {}
	}

	class Stack implements IStack {
		private stackSize = 0;
		private head: Node | null = null;

		constructor() {}

		push(value: string): void {
			const node = new Node(value);
			node.next = this.head;
			this.head = node;
			this.stackSize++;
		}

		pop(): string {
			if (!this.head) {
				throw new Error('stack is empty');
			}
			const value = this.head.value;
			this.head = this.head.next;
			this.stackSize--;
			return value;
		}

		get size() {
			return this.stackSize;
		}
	}

	// const stack = new Stack();
	// stack.push('1');
	// console.log(`[stack size] : ${stack.size}`);
	// stack.push('2');
	// console.log(`[stack size] : ${stack.size}`);
	// stack.push('3');
	// console.log(`[stack size] : ${stack.size}`);
	// stack.push('4');
	// console.log(`[stack size] : ${stack.size}`);

	// console.log(stack.pop());
	// console.log(`[stack size] : ${stack.size}`);
	// console.log(stack.pop());
	// console.log(`[stack size] : ${stack.size}`);
	// console.log(stack.pop());
	// console.log(`[stack size] : ${stack.size}`);
	// console.log(stack.pop());
	// console.log(`[stack size] : ${stack.size}`);
	// console.log(stack.pop());
}

{
	interface Stack {
		push(value: string): void;
		pop(): string;
		readonly size: number;
	}

	type StackNode = {
		readonly value: string;
		readonly next?: StackNode;
	};

	class StackImpl implements Stack {
		private _size: number = 0;
		private head?: StackNode;

		constructor(private capacity: number) {}

		get size() {
			return this._size;
		}

		push(value: string): void {
			if (this._size === this.capacity) throw new Error('Stack is Full!');
			const node: StackNode = { value, next: this.head };
			this.head = node;
			this._size++;
		}
		pop(): string {
			// == 로 확인하면 null== undefined 동일하다고 간주
			if (this.head == null) throw new Error('Stack is Empty!');
			const node = this.head;
			this.head = node.next;
			this._size--;
			return node.value;
		}
	}

	const stack = new StackImpl(10);
	stack.push('Ellie 1');
	stack.push('Bob 2');
	stack.push('Steve 3');
	while (stack.size !== 0) {
		console.log(stack.pop());
	}

	stack.pop();
}
