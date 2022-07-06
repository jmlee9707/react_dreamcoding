import React, { useEffect, useRef, useState } from "react";

const SimpleHabit = (props) => {
  // state = {
  //     count: 0,
  //   };
  const [count, setCount] = useState(0);
  const spanRef = useRef(); // 한번만 만들고 메모리에 저장해놓고 이를 재사용

  const handleIncrement = () => {
    setCount(count + 1);
  };

  // callback 함수 전달
  useEffect(() => {
    console.log(`mount & update : ${count}`);
  }, [count]); // 두번째 인자는 원하는 데이터가 변경될때만 호출

  return (
    <li className="habit">
      <span ref={spanRef} className="habit-name">
        Reading
      </span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit increase" onClick={handleIncrement}>
        <i className="fa-solid fa-circle-plus"></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
