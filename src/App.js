import React, { useState,useEffect } from "react";
import Form from "./compontent/Form";
import List from "./compontent/List";
import { Randomimg } from "./compontent/Randomimg";


// Data Get from LocalStorage
const getLocalTodo = () => {
  let list = localStorage.getItem('todo')
    if(list){
      return JSON.parse(localStorage.getItem('todo'));
    }else{
     return [];
    }
  }

function App() {
  const [inputValue, setInputValue] = useState(""); //this state for input value
  const [inputDate, setInputDate] = useState(""); //this state for date value
  const [toDo, setTodo] = useState(getLocalTodo()); //this state for add all todo use array
  const [toogle, setToogle] = useState(true); //toogle for button add or edit
  const [editId, setEditId] = useState(null); //this is store to id for update
  // this is not test part but i am doing to hover to change random image generate
  const [hover, setHover] = useState("");
  
  // this hook is load first when website data load to set already have data in localstorage
  useEffect( () => {
    localStorage.setItem("todo",JSON.stringify(toDo))
  },[toDo]);
 
  return (
    <div className="App">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <Randomimg hover={hover} />
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          {/* This is form compontent */}
            <Form toogle={toogle} inputDate={inputDate} setInputDate={setInputDate} editId={editId} setToogle={setToogle} inputValue={inputValue} toDo={toDo} setTodo={setTodo} setInputValue={setInputValue} />
            {/* This one is List compontent */}
            <List setHover={setHover} inputDate={inputDate} setInputDate={setInputDate} setEditId={setEditId} inputValue={inputValue} setInputValue={setInputValue} setToogle={setToogle} setTodo={setTodo} toDo={toDo} />
          </div>
        </div>
      </section>
    </div>
  );
}
export default App;
