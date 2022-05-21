import styled from "styled-components";
import { useEffect, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
import { getLanguages } from "./const/languages";
import { withLoading } from "./hoc/withLoading";
// import { Modal } from "./components/modal";

// JSXでのフォーム利用（onChange）
// 親子間データやり取り
// 子→親コンポーネントにデータを渡す
// 親→子コンポーネントにデータを渡す

const HeaderUl = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`
const HeaderLi = styled.li`
  list-style: none;
  padding: 4px 12px;
  cursor: pointer;
  border-bottom: ${props => props.focused ? '2px solid #F44336' : 'none' };
  `

function App({ data }) {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(data);

  const addLang = (lang) => {
    console.log(lang);
    setLangs([...langs, lang]);
    setTab("list");
  }
  
  return (
    <div>
      <header>
        <HeaderUl>
          <HeaderLi focused={tab === 'list'} onClick={() => setTab('list')}>リスト</HeaderLi>
          <HeaderLi focused={tab === 'form'} onClick={() => setTab('form')}>フォーム</HeaderLi>
        </HeaderUl>
      </header>
      {
        tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
      {/* <Modal /> */}
    </div>
  );
}

export default withLoading(App, getLanguages);
