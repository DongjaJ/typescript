{
  /**
   * Type assertion π©
   * μ λ§ μ΄μ©μ μλκ²½μ°, 100νΌμΌνΈ νμ€ν λλ§ μ¬μ©
   * tsμμ  μ€λ₯ μλμ§λ§ μλ¬ λ  μ μμ -> jsμ λΉμ·ν μν
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
  numbers!.push // !λ ?μ λ°λλ‘ λ¬΄μ‘°κ±΄ μ°Έμ‘° π±
}
