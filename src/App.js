import { useContext, useState } from "react";
import { List } from "./List";
import { Form } from "./Form";
// import { getLanguages } from "./const/languages";
// import { withLoading } from "./hoc/withLoading";
import styled from "styled-components";
import { Header } from "./Header";
import { ThemeContext } from "./contexts/ThemeContext";

// JSXでのフォーム利用（onChange）
// 親子間データやり取り
// 子→親コンポーネントにデータを渡す
// 親→子コンポーネントにデータを渡す

const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`

function App({ data }) {
  const [tab, setTab] = useState("list");
  const [langs, setLangs] = useState(data);

  const [theme] = useContext(ThemeContext);

  const addLang = (lang) => {
    console.log(lang);
    setLangs([...langs, lang]);
    setTab("list");
  }
  
  return (
    <Container theme={theme}>
      <Header tab={tab} setTab={setTab} />
      {
        tab === "list" ? <List langs={langs} /> : <Form onAddLang={addLang} />
      }
    </Container>
  );
}

export default App;
