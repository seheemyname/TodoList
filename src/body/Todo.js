import React , {useState} from "react";
import TodoBoard from "../component/TodoBoard";
import '../component/TodoList.css';

function Todo() {
    const [inputValue, setInputvalue] = useState('')
    const [todoList, setTodoList] = useState([])
    const addItem = () => {
        setTodoList([...todoList,inputValue])
    }

    return(
        <div className="TodoInput">
            <input value = {inputValue} type="text" onChange={(event)=>setInputvalue(event.target.value)}/>
            <button onClick={addItem}> 등록 </button>
            <TodoBoard todoList={todoList}/>
        </div>
    );
};

export default Todo;