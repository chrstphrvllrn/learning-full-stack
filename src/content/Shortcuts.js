import React from 'react'
import CodeBlock from '../components/CodeBlock'

function Shortcuts() {
  return (
    <div>

<h1> Simple React Snippets</h1>
      
<h1>rfce→</h1>
  <CodeBlock>{`import React from 'react'

function $1() {
  return <div>$0</div>
}

export default $1`}</CodeBlock>
<br></br>   

<h1>rafce→</h1>
  <CodeBlock>{`import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1`}</CodeBlock>
<br></br>      


<h1>imrse→</h1>
  <CodeBlock>{`import { useState, useEffect } from "react"; `}</CodeBlock>
<br></br>        

<h1>imrs→</h1>
  <CodeBlock>{`import { useState } from "react"; `}</CodeBlock>
<br></br>    

<h1>usf→</h1>
  <CodeBlock>{`const [|, set|] = useState(); `}</CodeBlock>
 <br></br>    

 <h1>uef→</h1>
  <CodeBlock>{`useEffect(() => {
  |
}, []); `}</CodeBlock>


<h1>fre→ </h1>
 <CodeBlock>{`arrayName.forEach(element => { })
`}</CodeBlock>

<h1>nfn→ </h1>
 <CodeBlock>{`const functionName = (params) => { }
`}</CodeBlock>

<h1>sto→ </h1>
 <CodeBlock>{`setTimeout(() => { }, delayTime
`}</CodeBlock>

<h1>clg </h1>
 <CodeBlock>{`console.log(object)
`}</CodeBlock>


<h1> Tailwind Fold</h1>
<CodeBlock>{`option + control + A`}</CodeBlock>
source: https://marketplace.visualstudio.com/items?itemName=stivo.tailwind-fold


    </div>
  )
}

export default Shortcuts