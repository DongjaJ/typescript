{
  /**
   * Enum
   */

  // javscript
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;

  const MONDAY = 0;
  const TUESDAY = 1;
  const WENDSDAY = 2;
  const DaysEnum = Object.freeze({ MONDAY: 0, TUESDAY: 1, WENDSDAY: 2 });
  const dayOfToday = DaysEnum.MONDAY;

  //typescript
  // enum 웬만하면 사용하지 말고 union으로 사용하자 , enum 사용하는 건 모바일 개발자와 협업할때 빼곤 보통 없다
  type DaysOfWeek = "MONDAY" | "TUESDAY" | "WEDNSDAY";
  enum Days {
    MONDAY, // 0
    TUESDAY, //1
    WENDSDAY, // 2
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
  }

  //enum은 타입 보장안됌
  let day2: Days = Days.FRIDAY;
  day2 = 10;
  console.log(day2);

  let daysofweek: DaysOfWeek = "MONDAY";
  daysofweek = "MONDAY";
}
