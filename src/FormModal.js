import { Modal } from "./components/modal";
import { Button } from "./components/button";
import styled from "styled-components";

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background-color: white;
`

const ButtonWrapper = styled.div`
  display: 240px;
  justify-content: space-between;
  margin-top: 24px;
`


export const FormModal = ({ cancel, confirm }) => {
  return (
    <Modal>
      <Container>
        <div>本当に作成しますか？</div>
        <ButtonWrapper>
          <Button onClick={cancel}>キャンセル</Button>
          <Button onClick={confirm}>いいよ</Button>
        </ButtonWrapper>
      </Container>
    </Modal>
  )
}
