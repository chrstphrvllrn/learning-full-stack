import React from 'react'
import CodeBlock from '../components/CodeBlock'

function DynamicPagesWithReactHooks() {
  return (
    <div>
    <CodeBlock>{`
    
    `}</CodeBlock>     

<CodeBlock>{`
    
    `}</CodeBlock>  
    

    Create a Custom Hook
   
<CodeBlock>{`//hooks/useUsers.jsx
Import { useState } from 'react';

    const useUsers = () =>{
        const [users, setUsers] = useState([
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' },
        ])
     const addUser = (name) => {
        setUsers([...users, {id: users.length + 1, name}])
     }
     return {
        users,
        addUsers,
     }
 }`}</CodeBlock>  

Create a user list component
<CodeBlock>{`//components/UserList.jsx
const userList = ({ users }) => {
    return (
        <ul>
        { users.map((user) =>(
            <li key={ user.id }>{ user.name }</li>
           ))
        }
        </ul>
    )
}`}</CodeBlock>  

Create add user component
<CodeBlock>{`//components/AddUser.jsx
import { useState } from 'react';

const AddUser = ({ addUser }) =>{
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.prenentDefault();
        if(name){
            addUser(name);
            setName('');
        }
};

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                placeholder="enter name"
            />
            <button type="submit">Add User</button>
        </form>
    )   
}`}</CodeBlock> 


Integrate components in app
<CodeBlock>{`//App.jsx

import useUsers from './hooks/useUsers/
import UserList from './components/UserList/
import AddUser from './components/AddUser/

function App (){
    const { users, AddUser } = useUsers();

    return (
        <div>
        <h1> user List</h1>
        <UserList users={users} />
        <AddUser addUser={adduser} />
        </div>
    )
}
`}</CodeBlock> 
<p>source: https://www.instagram.com/p/C-Cu9wKSvK_/?img_index=10</p>
    </div>
  )
}

export default DynamicPagesWithReactHooks