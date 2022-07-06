import React, { PureComponent } from "react";

class Habit extends PureComponent {
  // componentDidMount() {
  //   console.log(`habit : ${this.props.habit.name} mounted`);
  // }
  // componentWillUnmount() {
  //   console.log(`habit  : ${this.props.habit.name} will unmount`);
  // }

  // handleIncrement라는 멤버변수는 화살표 함수를 가리키고 있음
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    // console.log(this.props);
    // const habitName = this.props.habit.name;
    // Habit은 외부에서 props로 전달받은 습관, Habit이라는 오브젝트의 데이터를 보여주기만 하는 컴포넌트
    const { name, count } = this.props.habit; //
    console.log(`habit: ${name}`);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement} //   버튼 클릭시 이 클래스 안에 있는 콜백함수 호출
        >
          <i className="fa-solid fa-circle-plus"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fa-solid fa-circle-minus"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
