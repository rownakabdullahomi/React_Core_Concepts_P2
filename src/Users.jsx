import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const loadUsers = async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data);
        }
        loadUsers();
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res => res.json())
        //     .then(data => setUsers(data))
    }, [])
    return(
        <div>
            <h3>Users : {users.length}</h3>
        </div>
    )
}