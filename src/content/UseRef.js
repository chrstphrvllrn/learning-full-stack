import React,  { useState, useEffect, useRef } from 'react'
import CodeBlock from '../components/CodeBlock'

function HookUseRef() {
  const myRef = useRef(null);

  const handleButtonClick = () => {
    // Modifying the current property doesn't trigger a re-render
    myRef.current.textContent = 'Button Clicked';
  };

  const [count, setCount] = useState(0);
  const previousCountRef = useRef(0);

  useEffect(() => {
    // Update the previous count when count changes
    previousCountRef.current = count;
  }, [count]);


  const inputRef = useRef(null);

  const handleFocusButtonClick = () => {
    // Focus on the input element using useRef
    inputRef.current.focus();
  };



  const documentTitleRef = useRef('');

  useEffect(() => {
    // Update the document title if it has changed
    if (document.title !== documentTitleRef.current) {
      document.title = documentTitleRef.current;
    }
  }, []);

  const handleTitleChange = (e) => {
    documentTitleRef.current = e.target.value;
    alert(documentTitleRef.current);
  };


  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }


  return (
    <div>
 
 <h1>By using a ref, you ensure that:</h1>

<li>You can <strong>store information</strong> between re-renders (unlike regular variables, which reset on every render).</li>
<li>Changing it does not trigger a re-render (unlike state variables, which trigger a re-render).</li>
<li>The information is local to each copy of your component (unlike the variables outside, which are shared).</li>
<li>Changing a ref does not trigger a re-render, so refs are not appropriate for storing information you want to display on the screen. Use state for that instead. Read more about choosing between useRef and useState.</li>
<li>In Strict Mode, React will call your component function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. Each ref object will be created twice, but one of the versions will be discarded. If your component function is pure (as it should be), this should not affect the behavior.</li>
<button onClick={handleClick} className='border rounded-md p-4 bg-blue-500 text-white my-4'>
      Click me!
    </button>

<CodeBlock>{`import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
}
`}</CodeBlock>


<CodeBlock>{`const divRef = useRef();
/* divRef is initialised with current property set to 'undefined' because we didn’t give a value to the hook.*/
...
const MyComponent = (props) => {
  return <div ref={divRef}> A Div! </div>;
};
...
/* by passing divRef to the ref={} attribute, when the component is mounted to the DOM the divRef.current property gets set to the actual DOM node, eg. "<div>A Div!</div>" */`}</CodeBlock>



<button onClick={handleButtonClick} className='border rounded-md p-4 bg-blue-500 text-white'>Click Me</button>
<p ref={myRef} className='p-4'>Initial Text</p>

<CodeBlock>{`import React, { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(null);

  const handleButtonClick = () => {
    // Modifying the current property doesn't trigger a re-render
    myRef.current.textContent = 'Button Clicked';
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click Me</button>
      <p ref={myRef}>Initial Text</p>
    </div>
  );
}`}</CodeBlock>

<br></br>
<h1>Storing Mutable Values Without Re-renders</h1>
<p>Unlike state variables, changes to a useRef object's current property do not trigger re-renders. This makes useRef an excellent choice for storing values that don't impact your component's UI but need to persist between renders.

Here's an example that uses useRef to store a previous value:</p>

<p>Current Count: {count}</p>
<p>Previous Count: {previousCountRef.current}</p>
<button onClick={() => setCount(count + 1)} className='border rounded-md p-4 bg-blue-500 text-white'>Increment</button>

<CodeBlock>{`import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const previousCountRef = useRef(0);

  useEffect(() => {
    // Update the previous count when count changes
    previousCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>Current Count: {count}</p>
      <p>Previous Count: {previousCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}`}</CodeBlock>
<br></br>
<h1>Accessing and Manipulating DOM Elements</h1>
<p>One of the most frequent use cases for useRef is accessing and manipulating DOM elements directly. This is particularly useful when you need to perform actions such as focusing on an input field, scrolling to a specific element, or animating elements.

Here's an example that demonstrates how to use useRef to focus on an input field:</p>


<input ref={inputRef} type="text" className='p-4 border my-4'/><br></br>
<button onClick={handleFocusButtonClick} className='border rounded-md p-4 bg-blue-500 text-white'>Focus Input</button>

<CodeBlock>{`import React, { useRef } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  const handleFocusButtonClick = () => {
    // Focus on the input element using useRef
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocusButtonClick}>Focus Input</button>
    </div>
  );
}
`}</CodeBlock>
<br></br>
<h1>Advanced useRef Techniques: Combining useRef with useEffect for Complex Scenarios</h1>
<p>useRef and useEffect can be combined to handle more complex scenarios. You can use useRef to manage mutable values or references and useEffect to perform side effects.

Here's an example where we combine the two to observe changes in the document title:</p>
<input
  id="inputtitle"
  type="text"
  placeholder="Enter new title"
  onChange={handleTitleChange}
  className='border p-4 my-4'
/><br></br>


<CodeBlock>{`import React, { useEffect, useRef } from 'react';

function MyComponent() {
  const documentTitleRef = useRef('');

  useEffect(() => {
    // Update the document title if it has changed
    if (document.title !== documentTitleRef.current) {
      document.title = documentTitleRef.current;
    }
  }, []);

  const handleTitleChange = (e) => {
    documentTitleRef.current = e.target.value;
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new title"
        onChange={handleTitleChange}
      />
    </div>
  );
}`}</CodeBlock>

        source: https://dev.to/samabaasi/mastering-reacts-useref-hook-a-deep-dive-1548#:~:text=useRef%20is%20a%20hook%20in,re%2Drenders%20when%20they%20change.
        source: https://www.instagram.com/p/C7wkCHVP1VO/?img_index=4
    </div>
  )
}

export default HookUseRef