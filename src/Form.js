import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    }
  }
  submitForm(e) {
    e.preventDefault();
    this.props.onAddLang(this.state.text);
  }
  render() {
    const { text } = this.state;
    return (
      <div>
        <h4>言語の追加</h4>
        <form onSubmit={(e) => this.submitForm(e)}>
          <div>
            <input type="text" value={text} onChange={(e) => this.setState({ text: e.target.value })} autoFocus/>
          </div>
          <div>
            <button>ボタン</button>
          </div>
        </form>
      </div>
    )
  }
}