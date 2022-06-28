import React, { Component } from "react";
import Habit from "./habit";
class Habits extends Component {
  state = {
    habits: [
      // habit이라는 키를 가진 배열
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ], //
  };

  // 해당하는 습관을 인자로 받아와야 함
  handleIncrement = (habit) => {
    // 리액트에서는 state를 직접적으로 수정하는 것은 좋지 않음
    // habit.count++;
    // this.setState(this.state);

    const habits = [...this.state.habits];
    // spread operator :
    // 기존의 배열 안에 있는 아이템들을 하나하나씩 새로운 배열 안으로 복사해오는 것을 의미
    const index = habits.indexOf(habit);
    habits[index].count++;
    //key : habits, value : local에서 만든 habits 배열
    // key와 value가 동일한 경우에는 하나로 생략이 가능
    this.setState({ habits: habits });
  };
  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: habits });
  };
  handleDelete = (habit) => {
    // 전달받은 habit을 배열에서 삭제
    //filter API 사용, 전달받은 habit을 제외한 새로운 배열 만들기

    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit) => (
          // habits 컴포넌트 안에는 habit 컴포넌트가 있고
          // 각각의 habit 컴포넌트 안에는 부모 컴포넌트로부터 전달받은
          // 이 prop으로 전달받은 배열의 아이템들이 전달
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
          // key는 고유한 키, 배열의 인덱스는 절대 사용하면 안됨
        ))}
      </ul>
    );
  }
}

export default Habits;
