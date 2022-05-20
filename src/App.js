import { List } from "./List";
import { Form } from "./Form";
import React from "react";
import { getLanguages } from "./const/languages";
import styled from 'styled-components';

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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      tab: "list",
      langs: [],
    }
  }

  componentDidMount() {
    console.log("App.js:componentDidMount");
    this.fetchLanguages();
  }
  async fetchLanguages() {
    const langs = await getLanguages();
    this.setState({ langs });
  }

  addLang(lang) {
    this.setState({
      tab: "list",
      langs: [...this.state.langs, lang],
    });
  }

  render() {
    const { tab, langs } = this.state;
    return (
      <div>
        <header>
          <HeaderUl>
            <HeaderLi focused={tab === 'list'} onClick={() => this.setState({ tab: 'list'})}>リスト</HeaderLi>
            <HeaderLi focused={tab === 'form'} onClick={() => this.setState({ tab: 'form'})}>フォーム</HeaderLi>
          </HeaderUl>
        </header>
        {
          tab === "list" ? 
          <List langs={langs} /> :
          <Form onAddLang={(lang) => this.addLang(lang)} />
        }
      </div>
    )
  }
}

export default App;
