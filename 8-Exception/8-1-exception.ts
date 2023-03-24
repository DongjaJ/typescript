//Java : Exception
//Javascript, typescript: Error
// const array = new Array(10000000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
	if (fileName === 'not exists!') {
		throw new Error(`file not exist! ${fileName}`);
	}
	return 'file contents';
}

function closeFile(fileName: string) {}

const fileName = 'not exists!';

function run() {
	try {
		console.log(readFile(fileName));
	} catch (e) {
		console.log('catched!!');
		return;
	} finally {
		closeFile(fileName);
		console.log('finally!!!');
	}
	console.log('!!!');
}

run();
