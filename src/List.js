import { useEffect } from "react"
import styled from "styled-components";


const ListItem = styled.div`
  padding: 8px 16px;
  
  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }
`


export const List = ({langs}) => {
  useEffect(() => {
    console.log("List.js:useEffect");

    return () => {
      console.log("List.js:useEffect:unmount");
    }
  })
  return (
    <div>
      {
        langs.map((lang, index) => {
          return <ListItem key={ index }>{ lang }</ListItem>
        })
      }
    </div>
  )
}