{
  /**
   * Type inference
   */

  let txt = "1"; // 자동으로 string으로 타입 유추
  // txt = 1; //에러

  //default parameter를 통해 타입 유츄
  function print(message = "hello") {
    console.log(message);
  }
  print("1");
  //   print(1); //에러

  //프로젝트할떼 스타일 가이드를 정해서 타입 추론이 가능한 경우를 한정하자.
  //웬만하면 타입 작성하는 습관 들이기
  function add(x: number, y: number): number {
    return x + y;
  }
  const result = add(1, 2);
}
