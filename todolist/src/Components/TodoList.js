import React, { useState } from "react";

const TodoList = () => {
  const [addTask, setAddTask] = useState([]);
  const [value, setValue] = useState("");
  const [editID, setEditId] = useState(0);
  const handleClick = () => {
    if (editID) {
      const edit = addTask.find((i) => i.id === editID);
      const updatedTodo = addTask.map((e) =>
        e.id === edit.id
          ? (e = { e: e.id, value })
          : { id: e.id, value: e.value }
      );
      setAddTask(updatedTodo);
      setValue("");
      setEditId(0);
      return;
    }

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
  const handleEdit = (id) => {
    const edit = addTask.find((i) => i.id === id);
    setValue(edit.value);
    setEditId(id);
  };

  const handleDelete = (id) => {
    const deletedTodo = addTask.filter((e) => {
      return e.id !== id;
    });
    setAddTask([...deletedTodo]);
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
                <button onClick={() => handleDelete(e.id)}>Delete</button>
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
