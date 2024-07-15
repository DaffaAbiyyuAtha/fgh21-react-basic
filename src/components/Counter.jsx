import React from "react";

function Counter() {
  //Component
  const [num, setNum] = React.useState(0);
  function mins() {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  function plus() {
    if (num < 10) {
      setNum(num + 1);
    }
  }
  //   if (minus >= 10) {
  //     minus += 1;
  //   }
  return (
    <div className="container-count">
      <div className="display-count">
        <button type="button" onClick={mins} className="minus">
          -
        </button>
        <div className="count">{num}</div>
        <button type="button" onClick={plus} className="minus">
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
