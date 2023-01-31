{
  /**
   * Intersection Types:&
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employedId: number;
    work: () => void;
  };

  function intermWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employedId, person.work());
  }

  intermWork({
    name: "Dongja",
    score: 4.5,
    employedId: 17,
    work: () => {},
  });
}
