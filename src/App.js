import { List } from "./List";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "クリックしてみよう" }
  }
  changeDescription() {
    this.setState({
      description: "クリックしてはダメ！！"
    })
  }
  render() {
    const { description } = this.state;
    return (
      <div>
        { description }
        <List title="取扱言語一覧" />
        <button onClick={() => this.changeDescription()}>
          ボタン
        </button>
      </div>
    )
  }
}

export default App;
