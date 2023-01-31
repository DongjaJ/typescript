{
  /**
   *  Type Aliases
   */
  type Text = string;
  const name: Text = "dongja";
  const address: string = "Korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  // name이라는 문자열과 age라는 number를 꼭 넣어줘야함
  const student: Student = {
    // animal: 'string',
    name: "dongja",
    age: 7,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let dongjaName: Name;
  dongjaName = "name";
  type Json = "json";
  const json: Json = "json";
}
