import React from "react";
import styled from 'styled-components';
import { TabBodyContainer } from "./components/tab-body-container"


const ListItem = styled.div`
  padding: 8px 16px;
  
  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`

export class List extends React.Component {
  componentWillUnmount() {
    console.log("List.js:Unmount");
  }
  render() {
    const { langs } = this.props;
    return (
      <TabBodyContainer title="取扱言語">
        <div>
          {
            langs.map((lang, index) => {
              return <ListItem key={ index }>{ lang }</ListItem>
            })
          }
        </div>      
      </TabBodyContainer>
    )
  }
}