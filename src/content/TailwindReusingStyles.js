import React from 'react'
import CodeBlock from '../components/CodeBlock'

function TailwindReusingStyles() {
  return (
    <div>
        <p>index.css</p>
<CodeBlock language="css">{`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn-primary {
    @apply py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75;
  }
}`}</CodeBlock>

<p>Usage</p>
<CodeBlock>{`<button class="btn-primary">
  Save changes
</button>`}</CodeBlock>
 <br></br>
 source: https://tailwindcss.com/docs/reusing-styles#extracting-classes-with-apply       


    </div>
  )
}

export default TailwindReusingStyles