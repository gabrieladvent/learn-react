import { memo, useState } from "react"

const TodoList = memo((props) => {
  const { todos } = props;
  console.log('call todo list');

  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <p>{todo}</p>
          </div>
        )
      })}
    </>
  );
})

function ExampleMemo() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(['sleep', 'pause']);

  const incraments = () => {
    setCount((count) => count + 1);
  };

  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, newTodo])
  };

  return (
    <>
      <TodoList todos={todos} />
      <button onClick={() => addTodo('wake up')}>Add Todo</button>

      <p>Count: {count}</p>
      <button onClick={incraments}>Increment</button>
    </>
  )
}

export default ExampleMemo
