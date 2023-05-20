import React, { useState } from "react";

const TodoList = () => {
  const [addTask, setAddTask] = useState([]);
  const [value, setValue] = useState("");
  const handleClick = () => {
    if (value !== "") {
      setAddTask([
        { id: Math.random().toString(16).slice(5), value },
        ...addTask,
      ]);

      setValue("");
    } else {
      alert("please write something");
    }
  };
  const handleEdit = () => {
    console.log("edit");
  };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        TodoList
      </h1>

      <div style={{ textAlign: "center" }}>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleClick}>Add</button>
      </div>

      {addTask.map((e) => {
        return (
          <>
            <li style={{ textAlign: "center", padding: "10px" }} key={e.id}>
              {e.value}

              <span>
                <button onClick={() => handleEdit(e.id)}>Edit</button>
                <button>Delete</button>
              </span>
            </li>
          </>
        );
      })}
    </div>
  );
};

export default TodoList;
<>
  <h1
    style={{
      textAlign: "center",
    }}
  >
    TodoList
  </h1>

  <div style={{ textAlign: "center" }}>
    <input />
    <button>Add</button>
  </div>
</>;
