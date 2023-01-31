{
  //   //js
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   //ts
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   //js
  //   function jsFetchNum(id) {
  //     //code
  //     //code
  //     //code
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   //ts

  //   function FetchNum(id: string): Promise<number> {
  //     //code
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //js => ts
  //Optional parameter 두번째 매개변수는 선택
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName("Steve", "Jobs");
  printName("dongja");
  printName("sseng", undefined);

  //default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //rest parameter
  function addNumber(...numbers: Array<number>): number {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }

  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3, 4));
  console.log(addNumber(1, 2, 3, 4, 5, 6));
}
