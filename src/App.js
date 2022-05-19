import { useState } from "react";
import { List } from "./List";

function App() {
  const [description, setdescription] = useState("クリックしてみよう");

  const changedescription = () => {
    setdescription("クリック絶対ダメ！！");
  }
  
  return (
    <div>
      { description }
       <List title="取扱言語一覧"/>
       <button onClick={changedescription}>ボタン</button>
    </div>
  );
}

export default App;
