import { Fragment, useEffect, useState } from 'react';
import CreateTodoButton from './components/CreateTodoButton';
import ModalNewTodo from './components/ModalNewTodo';

// Components
import TodoCounter from './components/TodoCounter';
import TodoList from './components/TodoList';
import TodoSearch from './components/TodoSearch';

// Interfaces
import { Todo } from './interfaces/Todo';

const App = () => {

  let localStorageTodo: Todo[] = localStorage.getItem('listTodo') !== null 
    ? JSON.parse(localStorage.getItem('listTodo')!) : [];

  const [ statusModal, setStatusModal ] = useState<boolean>(false);

  const [ todoItems, setTodoItems ] = useState<Todo[]>(localStorageTodo);

  const [ searchTodo, setSearchTodo ] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('listTodo', JSON.stringify(todoItems));
    const body: HTMLBodyElement = document.querySelector('body')!;
    if(statusModal) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'unset';
    }
  }, [todoItems, statusModal])

  return (  
    <Fragment>
      <TodoCounter todoItems={todoItems}/>
      <TodoSearch setSearchTodo={setSearchTodo}/>
      <TodoList 
        todoItems={todoItems} 
        setTodoItems={setTodoItems}
        searchTodo={searchTodo}
      />
      <CreateTodoButton setStatusModal={setStatusModal}/>
      { statusModal ? 
        <ModalNewTodo 
          setStatusModal={setStatusModal}
          todoItems={todoItems}
          setTodoItems={setTodoItems}
        /> 
        : null 
      }
    </Fragment>
  );
}
 
export default App;