import { useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styled from "styled-components";

import { Todo } from '../interfaces/Todo';

const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalTodo = styled.div`
  width: 100%;
  max-width: 350px;
  padding: 24px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 20px #333;

  h2 {
    margin: 0;
  }

  input {
    font-size: 18px;
    padding: 10px;
    outline: none;
    border: 1px solid #999;
    border-radius: 5px;
  }

  button {
    border: none;
    background-color: #0094fd;
    color: #fff;
    padding: 10px 0;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background .3s ease;

    &:hover {
      background-color: #0f83d5;
    }
  }
`;

interface Props {
  setStatusModal: React.Dispatch<React.SetStateAction<boolean>>;
  todoItems: Todo[];
  setTodoItems: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ModalNewTodo = ({setStatusModal, todoItems, setTodoItems}: Props) => {

  const containerModal = useRef(null);

  const [ stateTodo, setStateTodo ] = useState<string>('');

  const handleCloseModal = (event: React.MouseEvent<HTMLDivElement>) => {
    if(event.target === containerModal.current! as HTMLElement) {
      setStatusModal(false);
    }
  }

  const handleChangeTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateTodo(event.target.value);
  }

  const handleNewTodo = () => {
    if(stateTodo.trim().length !== 0) {
      const newTodo: Todo = {
        id: uuid(),
        task: stateTodo,
        completed: false
      }
      setTodoItems([...todoItems, newTodo]);
      setStateTodo('');
      setStatusModal(false);
    }
  }

  return (  
    <ContainerModal ref={containerModal} onClick={handleCloseModal}>
      <ModalTodo>
        <h2>Ingrese la tarea</h2>
        <input type="text" onChange={handleChangeTodo} />
        <button onClick={handleNewTodo}>Guardar</button>
      </ModalTodo>
    </ContainerModal>
  );
}
 
export default ModalNewTodo;