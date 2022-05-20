import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";


function App() {
  const [tab, setTab] = useState("list");
  
  return (
    <div>
      <header>
        <ui>
          <li onClick={() => setTab("list")}>リスト</li>
          <li onClick={() => setTab("form")}>フォーム</li>
        </ui>
      </header>
      <hr/>
      {
        tab === "list" ? <List title="取扱言語一覧"/> : <Form />
      }
    </div>
  );
}

export default App;
