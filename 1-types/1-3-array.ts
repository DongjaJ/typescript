{
  //Array
  const fruits: string[] = ["๐", "๐"]; // ์๋ง readonly์ฌ์ฉ๊ฐ๋ฅ
  const scores: Array<number> = [1, 3, 4];

  //readonly๋ฉด ๋ณ๊ฒฝ ๋ถ๊ฐ๋ฅ
  function printArray(fruits: readonly string[]) {}

  //tuple ์๋ก๋ค๋ฅธ ํ์์ ๋ฐฐ์ด์ ์ ์ฅ๊ฐ๋ฅ
  //๊ฐ๋์ฑ์ด ๋จ์ด์ง๊ณ  ์ธ๋ฑ์ฑ ์ ๊ทผ์ด ๋งค์ฐ ๋ณ๋ก -> interface, type alias, class
  //๋ฆฌ์กํธ์ useState์์๋ tuple์ ์ ์ฐํ๊ฒ ์ ์ฌ์ฉ
  let student: [string, number];
  student = ["name", 123];
  student[0]; //name
  student[1]; //123
  //object destructor ๊ทธ๋๋ ๋ฐ์ดํฐ ์ฌ์ฉํ๋ ๊ณณ์์ ์ ํ๋ฏ๋ก ๋ณ๋ก
  const [name, age] = student;
}
