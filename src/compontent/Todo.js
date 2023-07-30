import React from "react";

export default function Todo({
  setInputValue,
  setToogle,
  todo,
  toDo,
  setTodo,
  id,
  text,
  setInputDate,
  setEditId,
  setHover,
}) {
  // Delete Todo by filter method
  const deleteTodo = () => {
    setTodo(toDo.filter((li) => li.id !== todo.id));
  };

  // Complete Task
  const completeTodo = () => {
    setTodo(
      toDo.map((li) => {
        if (li.id === todo.id) {
          return { ...li, completed: !li.completed };
        }
        return li;
      })
    );
  };

  // Edit Todo with with update Date as well
  const editTodo = () => {
    let newEdit = toDo.find((li) => {
      return li.id === todo.id;
    });
    setToogle(false);
    setInputValue(newEdit.text);
    setInputDate(newEdit.date);
    setEditId(newEdit.id);
  };
  let date = new Date(todo.date).getTime();
  let today = new Date().getTime();
  let msDay = 24 * 60 * 60 * 1000; // milliseconds per day
  let days = Math.floor((today - date) / msDay);
  return (
    <>
      <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg">
        <div className="relative flex items-start w-full">
          <div onClick={completeTodo} className="flex items-center h-5">
            <input
              id={`hs-list-group-item-checkbox-${id}`}
              name={`hs-list-group-item-checkbox-${id}`}
              type="checkbox"
              checked={todo.completed || days > 0 ? true : false}
              readOnly
              className="border-gray-200 rounded dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <label
            onMouseEnter={() => setHover(text)}
            htmlFor="hs-list-group-item-checkbox-1"
            className={`ml-3.5 block w-full text-sm text-gray-600 dark:text-gray-500 ${
              todo.completed ? "line-through" : days > 0 ? "line-through" : ""
            }`}
          >
            {text} =={" "}
            {days > 0
              ? "Expired"
              : days === 0
              ? "Today"
              : Math.abs(days) + 1 + "Days Reamining"}
          </label>
          {/* Edit Div */}
          <div
            onClick={editTodo}
            className="cursor-pointer mr-4 hover:text-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </div>
          {/* End Edit Div */}
          {/* Delete Div */}
          <div
            onClick={deleteTodo}
            className="cursor-pointer hover:text-red-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div>
          {/* Delete Div end */}
        </div>
      </li>
    </>
  );
}
