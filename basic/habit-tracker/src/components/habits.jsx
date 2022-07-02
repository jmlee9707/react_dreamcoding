import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
class Habits extends Component {
  // 해당하는 습관을 인자로 받아와야 함
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };
  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };
  // handleDelete = (habit) => {
  //   this.props.onDelete(habit);
  // };
  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            // habits 컴포넌트 안에는 habit 컴포넌트가 있고
            // 각각의 habit 컴포넌트 안에는 부모 컴포넌트로부터 전달받은
            // 이 prop으로 전달받은 배열의 아이템들이 전달
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={(habit) => {
                this.handleDelete(habit);
              }} // 이렇게 쓰면 안되는 경우가 존재
            />
            // key는 고유한 키, 배열의 인덱스는 절대 사용하면 안됨
          ))}
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>
          ResetAll
        </button>
      </>
    );
  }
}

export default Habits;
