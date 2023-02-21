import styled from 'styled-components';
import { Todo } from '../interfaces/Todo';

import TodoItem from './TodoItem';

const Lista = styled.ul`
  margin: 0;
  padding: 0 0 56px 0;
  list-style: none;
`;

const MessageAlert = styled.h2`
  margin: 24px 0 0 31px;
`;

interface Props {
  todoItems: Todo[];
  setTodoItems: React.Dispatch<React.SetStateAction<Todo[]>>;
  searchTodo: string;
}

const TodoList = ({todoItems, setTodoItems, searchTodo}: Props) => {

  const todoFilter = todoItems.filter( todo => todo.task.toLowerCase().endsWith(searchTodo.toLowerCase()));

  if(todoFilter.length === 0 && todoItems.length > 0) {
    return <MessageAlert>No se ha encontrado ninguna tarea</MessageAlert>
  }

  return (  
    <section>
      <Lista>
        { todoFilter.map( todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            todoItems={todoItems}
            setTodoItems={setTodoItems}
          />
        ))}
      </Lista>
    </section>
  );
}
 
export default TodoList;