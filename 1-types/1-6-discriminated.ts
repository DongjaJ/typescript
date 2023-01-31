{
  //function: login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };
  type FailState = {
    result: "fail";
    reason: string;
  };
  type LoginStatus = SuccessState | FailState;

  function login(): LoginStatus {
    return {
      result: "success",
      response: {
        body: "logged in",
      },
    };
  }
  // 예제 연습하기 printLogState(state:LoginStatus)
  // success -> 🎉 success
  // fail -> 🥲 reason
  function printLogState(state: LoginStatus) {
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`🥲 ${state.reason}`);
    }
  }
}
