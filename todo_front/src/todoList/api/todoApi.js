import axios from "axios"

export const insert = async (todo) => {
  const res = await axios.post('/todo', {
    userId: 1,
    content: todo
  });

  return res;
}

export const fetchList = async () => {
  const list = await axios.get(`/todo/list/${1}`);
  return list;
}