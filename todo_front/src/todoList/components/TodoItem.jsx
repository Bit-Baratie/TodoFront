import useTodos from "../hooks/useTodos";

const TodoItem = ({id, content}) => {
  const {remove} = useTodos();

  return(
    <div>
      <span>{id}</span>
      <span>{content}</span>
      <button onClick={() => remove(id)}>삭제</button>
    </div>
  );
}

export default TodoItem;