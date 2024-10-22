import React, { useState } from 'react'
import CodeBlock from '../components/CodeBlock'

function HookUseState() {
    const [message, setMessage] = useState( '' )

    return (
        <div>

            <div>
                <h1>Basic Syntax</h1>
                <CodeBlock>{`const [state, setState] = useState(initialValue)`}</CodeBlock>
                <br></br>
                <h1>Returns</h1>
                <p>
                    <pre>state</pre> - <span>an independently maintained state variable, initialized to the hook's only argument</span><br></br>
                    <pre>setState</pre> - <span>a function to update state</span>
                </p>
                <br></br>

<CodeBlock>{`// Objects
const [state, setState] = useState({ name: 'John', age: 30 });

const updateName = () => {
    setState({ ...state, name: 'Jane' });
};

const updateAge = () => {
    setState({ ...state, age: state.age + 1 });
};

`}</CodeBlock>
<CodeBlock>{`// Arrays
const [array, setArray] = useState([1, 2, 3, 4, 5]);

const addItem = () => {
    setArray([...array, 6]);
};

const removeItem = () => {
setArray(array.slice(0, array.length - 1));
};

`}</CodeBlock>


<h1>Using React Hooks to update the state</h1>

<input
         type="text"
         value={message}
         placeholder="Enter a message"
         onChange={e => setMessage(e.target.value)}
         className='p-4 w-full border rounded-md'
       />
      <p>
        <strong className=''>{message}</strong>
      </p>
<CodeBlock>{`const Message = () => {
  const [message, setMessage] = useState( '' );

  return (
    <div>
      <input
         type="text"
         value={message}
         placeholder="Enter a message"
         onChange={e => setMessage(e.target.value)}
       />
      <p>
        <strong>{message}</strong>
      </p>
    </div>
  );
};`}</CodeBlock>

   
    
   

            </div>



            <br></br>
            <br></br>
            <div>source:https://www.instagram.com/p/C7wkCHVP1VO/?img_index=2</div>
        </div>
    )
}

export default HookUseState