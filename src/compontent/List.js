import React from "react";
import Todo from "./Todo";

export default function List({
  setToogle,
  setInputValue,
  inputvalue,
  inputDate,
  setInputDate,
  toDo,
  setTodo,
  setHover,
  setEditId
}) {
  return (
    <>
      <ul className="mt-10 lg:w-full xl:w-1/2 flex flex-col">
        {toDo.map((todo) => (
          <Todo
            setInputValue={setInputValue}
            inputvalue={inputvalue}
            setToogle={setToogle}
            setTodo={setTodo}
            todo={todo}
            toDo={toDo}
            id={todo.id}
            date={todo.date}
            text={todo.text}
            inputDate={inputDate}
            setInputDate={setInputDate}
            setHover={setHover}
            setEditId={setEditId}
          />
        ))}
      </ul>
    </>
  );
}
