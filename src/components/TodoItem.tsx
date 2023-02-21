import styled from "styled-components";
import { BsCheck, BsTrash } from 'react-icons/bs'
import { Todo } from "../interfaces/Todo";

const ListItem = styled.li`
  background-color: #FAFAFA;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);
  height: 50px;
`;

const ContentInfo = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
`;

const ContentDelete = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9f9b9b;
  cursor: pointer;

  &:hover { 
    svg {
      fill: #ff0000;
    }
  }
`;

const IconCheck = styled(BsCheck)`
  font-size: 24px;

  &.active {
    fill: #4caf50;
  }
`;

const ItemP = styled.p`
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;

  &.active {
    text-decoration: line-through;
  }
`;

const IconDelete = styled(BsTrash)`
  font-size: 24px;
`;

interface Props {
  todo: Todo;
  todoItems: Todo[];
  setTodoItems: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoItem: React.FC<Props> = ({todo, todoItems, setTodoItems}) => {

  const handleChangeCompleted = (id: string) => {
    const updateTodo: Todo[] = todoItems.map( todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed }
      } 
      return todo;
    })

    setTodoItems(updateTodo);
  }

  const handleTodoDelete = (id: string) => {
    const updateTodo: Todo[] = todoItems.filter( todo => todo.id !== id);
    setTodoItems(updateTodo);
  }

  return (  
    <ListItem>
      <ContentInfo onClick={() => handleChangeCompleted(todo.id)} >
        <IconCheck className={`${todo.completed && 'active'}`} />
        <ItemP className={`${todo.completed && 'active'}`} >
          {todo.task}
        </ItemP>
      </ContentInfo>
      <ContentDelete onClick={() => handleTodoDelete(todo.id)}>
        <IconDelete />
      </ContentDelete>
    </ListItem>
  );
}
 
export default TodoItem;