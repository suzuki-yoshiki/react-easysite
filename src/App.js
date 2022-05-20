import { useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { LANGUAGES } from "./const/languages";


// JSXでのフォーム利用（onChange）
// 親子間データやり取り
// 子→親コンポーネントにデータを渡す
// 親→子コンポーネントにデータを渡す





function App() {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(LANGUAGES);

  const addLang = (lang) => {
    console.log(lang);
    setLangs([...langs, lang]);
    setTab("list");
  }
  
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
        tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </div>
  );
}

export default App;
