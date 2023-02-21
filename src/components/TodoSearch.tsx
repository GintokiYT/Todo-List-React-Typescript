import styled from 'styled-components';

const Search = styled.input`
  background: #F9FBFC;
  border-radius: 2px;
  border: 2px solid #202329;
  margin: 0 24px;
  height: 50px;
  width: calc(100% - 62px);
  font-size: 24px;
  text-align: center;
  font-weight: 400;
  color: #1E1E1F;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);

  &::placeholder {
    color: #A5A5A5;
    font-weight: 400;
  }

  &:focus {
    outline-color: #1c6ff4;
  }
`;

interface Props {
  setSearchTodo: React.Dispatch<React.SetStateAction<string>>
}

const TodoSearch = ({setSearchTodo}: Props) => {  

  const handleFilterTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTodo(event.target.value);
  }

  return (  
    <Search type='text' placeholder='Ingresa una busqueda' onChange={handleFilterTodo}/>
  );
}
 
export default TodoSearch;