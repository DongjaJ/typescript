{
  //Array
  const fruits: string[] = ["🍎", "🍌"]; // 얘만 readonly사용가능
  const scores: Array<number> = [1, 3, 4];

  //readonly면 변경 불가능
  function printArray(fruits: readonly string[]) {}

  //tuple 서로다른 타입을 배열에 저장가능
  //가독성이 떨어지고 인덱싱 접근이 매우 별로 -> interface, type alias, class
  //리액트의 useState에서는 tuple을 유연하게 잘 사용
  let student: [string, number];
  student = ["name", 123];
  student[0]; //name
  student[1]; //123
  //object destructor 그래도 데이터 사용하는 곳에서 정하므로 별로
  const [name, age] = student;
}
