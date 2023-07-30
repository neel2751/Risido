import React from "react";
const Form = ({toogle,inputDate,setInputDate,setToogle,editId, setInputValue,inputValue,toDo,setTodo }) => {
  const handleForm = (e) => {
    e.preventDefault();
    if (!toogle && inputValue && inputDate){
      setTodo(toDo.map((ele) => {
        if(ele.id === editId){
          return {...ele,text:inputValue,date:inputDate}
        }
        return ele;
      }))
      setToogle(true);
      setInputValue('');
      setInputDate('');
    }
    else if(!inputValue || !inputDate){
        alert('enter valid data');
    }
    else{
      // const options = {
      //   weekday: "long",
      //   year: "numeric",
      //   month: "long",
      //   day: "numeric",
      // };
        const id = new Date().toLocaleString();
        // const newDate = new Date().toLocaleString("default", options);
        setTodo([...toDo,{text:inputValue,completed:false,id:id,date:inputDate}]);
        setInputValue('');
        setInputDate('');
    }
  };

  return (
    <>
      <div className="flex w-full md:justify-start justify-center items-end">
        <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
          <label
          htmlFor="hero-field"
            className="leading-7 text-sm text-gray-600"
          >
            Add Items
          </label>
          <div className="flex gap-4">

          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            name="hero-field"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <input
            value={inputDate}
            onChange={(event)=>setInputDate(event.target.value)}
            type="date"
            name="hero-field"
            min={new Date().toISOString().split('T')[0]}
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          </div>
        </div>
        {toogle ? <button onClick={handleForm} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Add
        </button> : <button onClick={handleForm} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Edit
        </button>}
      </div>
    </>
  );
};

export default Form;
