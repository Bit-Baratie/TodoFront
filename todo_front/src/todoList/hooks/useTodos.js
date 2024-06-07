import { useState } from "react";
import axios from "axios";
import { insert, fetchList } from "../api/todoApi";

const useTodos = () => {
  const [todo, setTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const getList = async () => {
    const list = await fetchList();
    setTodoList(list.data);
  }

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const regist = async () => {
    const res = await insert(todo);

    if (res.status === 201) {
      alert('등록되었습니다');
    } else {
      alert('잠시후 다시 시도해주세요');
    }
    // axios.post('/todo', {
    //   user_id: 1,
    //   content: todo,
    // }).then((res) => {
    //   console.log(res)
    //   if (res.status === 201) {
    //     alert('등록되었습니다');
    //   } else {
    //     alert('잠시후 다시 시도해주세요');
    //   }
    // })
  }

  const remove = (item_id) => {
    axios.delete(`/todo/${item_id}`)
    .then((res) => {
      if (res.status === 201) {
        alert('삭제되었습니다');
      } else {
        alert('잠시후 다시 시도해주세요');
      }
    })
  }

  return {
    getList,
    handleChange,
    regist,
    remove,
    todoList
  };
}

export default useTodos;