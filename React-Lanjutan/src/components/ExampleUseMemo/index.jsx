import { useMemo, useState } from "react";

const calculation = (num) => {
    console.log('call calculation');

    for (let i = 0; i < 10000; i++) {
        num += 1;
    }

    return num;
}

const ExampleUseMemo = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const result = useMemo(() => calculation(count), [count]);

    const increment  = () => {
        setCount((count) => count + 1);
    }

    const addTodo = () => {
        setTodos([...todos, 'new todo']);
    }

    return (
        <div>
            <div>
                <h2>Count: {count}</h2>
            </div>
            <button onClick={increment}>Increment</button>

            <div>
                <h2>Calculation: {result}</h2>
            </div>

            <hr />

            <div><h2>Todo: </h2></div>
            {todos.map((todo, index) => (
                <div key={index}>{todo}</div>
            ))}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default ExampleUseMemo;