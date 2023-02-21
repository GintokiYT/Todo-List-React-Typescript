import styled from 'styled-components';
import { Todo } from '../interfaces/Todo';

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  margin: 0;
  padding: 48px;
`;

interface Props {
  todoItems: Todo[];
}

const TodoCounter = ({todoItems}: Props) => {

  const completadas = todoItems.filter( todo => todo.completed === true).length;

  if(todoItems.length === 0) return <Title>No hay tareas pendientes</Title>

  return (  
    <Title>Has completado {completadas} de {todoItems.length} Tareas</Title>
  );
}
 
export default TodoCounter;