import React from "react";
import TodoItem from "./TodoItem";
import '../component/TodoList.css';

function TodoBoard(props) {

    return(
        <div className="Todo">
            <h1> Todo List </h1>
            {props.todoList.map((item)=><TodoItem item={item}/>)}
        </div>
    )
}

export default TodoBoard