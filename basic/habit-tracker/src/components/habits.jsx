import React, { Component } from "react";
import Habit from "./habit";
class Habits extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ], //
  };
  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          // habits 컴포넌트 안에는 habit 컴포넌트가 있고
          // 각각의 habit 컴포넌트 안에는 부모 컴포넌트로부터 전달받은
          // 이 prop으로 전달받은 배열의 아이템들이 전달
          <Habit key={habit.id} habit={habit} />
          // key는 고유한 키, 배열의 인덱스는 절대 사용하면 안됨
        ))}
      </ul>
    );
  }
}

export default Habits;
