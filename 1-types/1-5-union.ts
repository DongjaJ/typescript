{
  /**
   *  Union Types: OR
   */

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }
  move("down");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };

  //function: login -> success, fail
  type LoginStatus = SuccessState | FailState;

  //   function login(): LoginStatus {
  //     return {
  //       response: {
  //         body: "logged in",
  //       },
  //     };
  //   }

  // 예제 연습하기 printLogState(state:LoginStatus)
  // success -> 🎉 success
  // fail -> 🥲 reason
  //   function printLogState(state: LoginStatus) {
  //     if ("response" in state) {
  //       console.log("🎉 success");
  //     } else {
  //       console.log("🥲 reason");
  //     }
  //   }
}
