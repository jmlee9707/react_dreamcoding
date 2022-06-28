import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };
  // handleIncrement라는 멤버변수는 화살표 함수를 가리키고 있음
  handleIncrement = () => {
    // react component에서 제공하는 함수를 이용

    //state 오브젝트 안에 있는 count를 증가한 뒤 state를 업데이트 한다
    this.setState({ count: this.state.count + 1 });
    // count = this.state.count +1; 로 사용할 수 없는 이유는
    // 위의 방법처럼 사용하게 되면 리액트는 업데이트가 되었는지 안되었는지 모르기 때문에
    // 꼭 state를 업데이트 할 때에는 setState 함수를 호출해 주어야 한다.
  };
  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({
      count: count < 0 ? 0 : count,
    });
  };

  render() {
    // console.log(this.props);
    // const habitName = this.props.habit.name;
    const { name, count } = this.props.habit; //
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
        <button className="habit-button habit-delete">
          <i className="fa-solid fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
