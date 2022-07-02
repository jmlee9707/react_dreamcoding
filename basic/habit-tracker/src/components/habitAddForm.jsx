import React, { Component } from "react";

class HabitAddForm extends Component {
  inputRef = React.createRef(); //ref 오브젝트 생성
  onSubmit = (event) => {
    event.preventDefault(); // 브라우저의 기본 기능을 취소
    // console.log(this.inputRef.current.value);
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name); // 이름이 있다면 이 이름을 부모의 onAdd 함수를 통해 전달
    this.inputRef.current.value = ""; // 초기화
  };
  render() {
    return (
      // form에서는 버튼이 눌려지면 summit이라는 event가 발생
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          // input이라는 요소가 inputRef와 연결
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="plz enter your habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
