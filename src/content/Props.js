import React from 'react'
import CodeBlock from '../components/CodeBlock'

function Props() {
  return (
    <div>

    <h1>Basic Prop Passing</h1>
    You can pass props directly by including them as attributes on a component.
    <CodeBlock>{`const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

const App = () => {
  return <Greeting name="Alice" />;
};
`}</CodeBlock>

    <h1>Passing Multiple Props</h1>
    You can pass multiple props by adding more attributes.
    <CodeBlock>{`const UserProfile = ({ name, age }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

const App = () => {
  return <UserProfile name="Alice" age={30} />;
};
`}</CodeBlock>

    <h1>Passing Objects as Props</h1>
    You can pass objects as props if you need to send multiple related values.
    <CodeBlock>{`const UserDetails = ({ user }) => {
  return (
    <div>
      <h2>Name: {user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  );
};

const App = () => {
  const user = { name: "Alice", age: 30 };
  return <UserDetails user={user} />;
};
`}</CodeBlock>

    <h1>Passing Functions as Props</h1>
    You can pass functions as props to handle events or callbacks.
    <CodeBlock>{`const Button = ({ onClick }) => {
  return <button onClick={onClick}>Click Me!</button>;
};

const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <Button onClick={handleClick} />;
};
`}</CodeBlock>

    <h1>Default Props</h1>
    You can define default props for a component to provide fallback values.
    <CodeBlock>{`const Greeting = ({ name = "Guest" }) => {
  return <h1>Hello, {name}!</h1>;
};

const App = () => {
  return (
    <>
      <Greeting name="Alice" />
      <Greeting /> {/* Will use default name "Guest" */}
    </>
  );
};
`}</CodeBlock>

    <h1> Prop Types Validation</h1>
    You can use PropTypes to validate the props passed to a component.
    <CodeBlock>{`import PropTypes from 'prop-types';

const UserProfile = ({ name, age }) => {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

const App = () => {
  return <UserProfile name="Alice" age={30} />;
};
`}</CodeBlock>


    </div>
  )
}

export default Props