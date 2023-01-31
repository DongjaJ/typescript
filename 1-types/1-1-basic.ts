{
  // let
  let hello = "hello";
  hello = "hi";

  //const
  const n = 5;
  //   n = 1; // 에러

  /**
   * primitive: number, string, boolean, bigint, symbol, null, undefined
   * object: function, array
   */

  //number
  const num: number = -6;

  //string
  const str: string = "hello";

  //boolean
  const bool: boolean = false;

  //undefined
  let name: undefined; //이렇게 하면 변수에 undefined빆에 못담아서 보통 이렇게 안함 💩
  let age: number | undefined; //number | null보다 이걸 더 많이 이용 -> 타입 아직 안정해진것을 가정
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null
  let person: null; // 💩
  let person2: string | null;

  //unknown 💩 보통 쓰지말자
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any 💩 얘도 쓰지말자
  let anything: any = 0;
  anything = "hello";

  //void 보통 함수 리턴값 설정할때 사용
  function print() {
    console.log("hello");
    return;
  }

  //never 절대 리턴할수 없다 함수에서 사용
  function throwError(message: string): never {
    //message -> server(log)
    throw new Error(message);
    while (true) {}
  }

  let obj: object; //💩 너무 추상적
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
