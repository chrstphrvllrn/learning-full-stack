import React from 'react'
import CodeBlock from '../components/CodeBlock'

function Promise() {
  return (
    <div>

Traditional async task
<CodeBlock>{`setTimeout(function(){
    console.log('Hellow World!');
}, 2000)`}</CodeBlock>


 Using Promise
<CodeBlock>{`const wait = new Promise((resolve) =>
{
    setTimeout(resolve, 2000);
}).then(()=>{
    console.log('Hellow World!');
})
)`}</CodeBlock>
note: add a diagram here
<div>source:https://www.instagram.com/p/C93vlzKy0pA/?img_index=5</div>
    </div>
  )
}

export default Promise