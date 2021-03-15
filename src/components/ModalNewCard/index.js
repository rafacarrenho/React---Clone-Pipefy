import { useState } from "react";
import * as S from "./styles";

const ModalNewCard = ({ closeModal, addItemToList }) => {
  const [input, setInput] = useState("");
  return (
    <S.Overlay>
      <S.Container>
        <header>Adicione uma nova tarefa</header>
        <input
          type="text"
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <button onClick={closeModal} className="secondary">
          Cancelar
        </button>
        <button
          className="primary"
          disabled={!input}
          onClick={() => {
            addItemToList(input);
            closeModal();
          }}
        >
          Adicionar
        </button>
      </S.Container>
    </S.Overlay>
  );
};

export default ModalNewCard;
