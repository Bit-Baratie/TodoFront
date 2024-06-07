import { useState } from "react";
import axios from 'axios';
import useTodos from "../hooks/useTodos";

const Editor = () => {
  const {handleChange, regist} = useTodos();

  return (
    <>
    <input type="text" onChange={(e) => handleChange(e)}/>
    <button onClick={regist}>등록</button>
    </>
  );
}

export default Editor;