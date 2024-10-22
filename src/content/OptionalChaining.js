import React from 'react'
import CodeBlock from '../components/CodeBlock'

function OptionalChaining() {
  return (
    <div>
        
    <h1>Example of Using Optional Chaining in JSX</h1>
    <p>Using the optional chaining operator (?.) in JSX allows you to safely access nested properties of an object without having to check if each property in the chain is defined. If any property in the chain is null or undefined, it will return undefined instead of throwing an error.</p>
    <br></br>
    <h1>Explanation</h1>
    <li><pre>user?.name</pre>: This will return the name if the user object exists; otherwise, it will return undefined.</li>
    <li><pre>user?.id</pre>: Similarly, this will return the ID if it exists; if the id property is not defined on user, it will also return undefined.</li>
    <li><pre>user?.contact?.email</pre>: This safely checks for the contact object and its email property. If user or contact is undefined, it will not throw an error and will simply return undefined.</li>
    <br></br>
    <h1>Benefits of Using Optional Chaining</h1>
    <li><strong>Prevents Errors</strong>: It helps avoid runtime errors when trying to access properties of null or undefined objects.</li>
    <li><strong>Cleaner Code</strong>: It reduces the need for extensive conditional checks to ensure properties exist before accessing them.</li>
    <li><strong>Improved Readability</strong>: The syntax is concise and easier to read, making it clear which properties are being accessed.</li>
    <CodeBlock>{`const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>Name: {user?.name}</h2>
      <p>ID: {user?.id}</p>
      <p>Email: {user?.contact?.email}</p>
    </div>
  );
};

const App = () => {
  const user = {
    name: "Alice",
    // id: 123, // Uncommenting this line would define the id
    contact: {
      email: "alice@example.com",
    },
  };

  return <UserProfile user={user} />;
};`}</CodeBlock>

    </div>
  )
}

export default OptionalChaining