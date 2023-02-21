import styled from "styled-components";

const ButtonCreate = styled.button`
  background-color: #61DAFA;
  box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 50px;
  position: fixed;
  bottom: 24px;
  right: 24px;
  font-weight: bold;
  color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;

  transform: rotate(0);
  transition: .3s ease;

  &:hover {
    transform: rotate(224deg);
  }
`;

interface Props {
  setStatusModal: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateTodoButton = ({setStatusModal}: Props) => {

  const handleOpenModal = () => {
    setStatusModal(true);
  }

  return (  
    <ButtonCreate
      onClick={handleOpenModal}
    >+</ButtonCreate>
  );
}
 
export default CreateTodoButton;