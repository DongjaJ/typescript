{
  /**
   * Type assertion 💩
   * 정말 어쩔수 없는경우, 100퍼센트 확실할때만 사용
   * ts에선 오류 안나지만 에러 날 수 있음 -> js와 비슷한 위험
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const res = jsStrFunc();
  console.log((res as string).length);
  console.log((<string>res).length);

  function findNumbers(): undefined | number[]{
    return undefined
  }

  const numbers = findNumbers();
  numbers!.push // !는 ?와 반대로 무조건 참조 😱
}
