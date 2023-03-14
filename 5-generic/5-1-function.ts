{
	// type���� ��������
	function checkNotNullBad(arg: number | null): number {
		if (arg == null) throw new Error('Invalid Number!');

		return arg;
	}

	//type ���� x
	function checkNotNullAnyBad(arg: any | null): any {
		if (arg == null) throw new Error('Invalid Number!');
		return arg;
	}

	//generic
	function checkNotNull<T>(arg: T | null): T {
		if (arg == null) throw new Error('Invalid Number!');
		return arg;
	}

	const number = checkNotNull(123);
	const bool: boolean = checkNotNull(true);
}
