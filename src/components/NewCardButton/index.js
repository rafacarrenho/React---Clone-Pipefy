import { useState } from "react";
import { MdAdd } from "react-icons/md";
import ModalNewCard from "../ModalNewCard";

const NewCardButton = ({ addItemToList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button type="button" onClick={() => setIsModalOpen(true)}>
        <MdAdd size={24} color="#fff" />
      </button>
      {isModalOpen && (
        <ModalNewCard closeModal={closeModal} addItemToList={addItemToList} />
      )}
    </>
  );
};

export default NewCardButton;
