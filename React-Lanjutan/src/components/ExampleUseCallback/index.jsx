import { useCallback, useState } from "react";
import Search from "./Search";

const dataUser = ["Jhoe Doe", "John", "Doe", "John Doe Doe", "John Jhon Doe"]
const ExampleUseCallback = () => {

    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(dataUser);

    const increment = () => {
        setCount(count + 1);
    };


    const shuffle = (arr) => {
        return [...arr].sort(() => 0.5 - Math.random());
    };

    const handleSearch = useCallback(
        (text) => {
            console.log(users[0]);
            const filterUsers = dataUser.filter((user) => user.toLowerCase().includes(text));
            setUsers(filterUsers);
        }
    , [users]);

    return (
        <div>
            <div>
                <h4>Count {count}</h4>
                <button onClick={increment} >Increment</button>
            </div>

            <hr />

            <div>
                <Search onChange= {handleSearch}/>
                <h4>User</h4>
                <ul>
                    {
                        users.map((user, index) => (
                            <li key={index}>{user}</li>
                        ))
                    }
                </ul>
                
                <button onClick={() => setUsers(shuffle(dataUser))} >Shuffle</button>
            </div>


        </div>
    );
}

export default ExampleUseCallback