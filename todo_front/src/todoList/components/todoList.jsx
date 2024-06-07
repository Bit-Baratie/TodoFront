import { useEffect } from "react";
import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodos";

const TodoList = () => {
  const {getList, todoList} = useTodos();

  useEffect(() => {
    getList();
  }, []);

  return(
    <div>
      {todoList.map((item) => {
        return (<TodoItem key={item.id} id={item.id} content={item.content}/>)
      })}
    </div>
  );
}

export default TodoList;