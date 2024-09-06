import axios from "axios";
import { useEffect, useState } from "react";
interface resultType {
  _id: string,
  task: string,
  checked: boolean,
  createdAt: Date,
  updatedAt: Date
}

function App() {
  const [input, setInput] = useState<string>("");
  const [resultArray, setResultArray] = useState<resultType[] | []>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleAdd = async () => {
    await axios.post("http://localhost:4000/api/todos/addTodo", {
      "task": input,
      "checked": false
    })
    setInput("")
    dataFetching()
  };

  const dataFetching = async () => {
    const data = await axios.get("http://localhost:4000/api/todos");
    setResultArray(data.data);
  }

  const handleUpdate = async (e: React.ChangeEvent<HTMLInputElement>, task: any) => {
    try{
      await axios.put("http://localhost:4000/api/todos/updateTodo", {
        id: task._id,
        checked: e.target.checked
      })
      dataFetching();
    } catch( error: any){
      console.log(error.meessage)
    }
  }

  useEffect(() => {
    dataFetching()
  }, [])

  return (
    <>
      <div>
        <label>
          Enter Task:{" "}
          <input
            type="text"
            name="task"
            value={input}
            placeholder="Enter a task"
            onChange={handleChange}
          />
        </label>
        <button onClick={handleAdd}>Add</button>
      </div>
      <section> 
        {resultArray.length === 0? <h1>No tasks</h1> : resultArray.map((task: resultType) => {
          return (
            <div id = {task._id}>
              <p>{task.task}</p>
              <input type="checkbox" name={task.task} onChange={(e) => handleUpdate(e, task)} checked={task.checked} />
            </div>
          );
        })}
      </section>
    </>
  );
}

export default App;
