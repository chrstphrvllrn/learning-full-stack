import React from 'react'
import CodeBlock from '../components/CodeBlock'
function Curl() {
    return (
        <div>
http://localhost:5000/api/updatebeat/:id
<CodeBlock>{`curl -X DELETE http://localhost:5000/api/deletebeat/6711c1f19b6a766f9f5a410d`}</CodeBlock>
<CodeBlock>{`curl -X PUT http://localhost:5000/api/updatebeat/6711bf7e9b6a766f9f5a40fb \
   -H "Content-Type: application/json" \
   -d '{"title": "Updated Beat Title", "bpm": 150, "status": "for sale"}'`}</CodeBlock>
<CodeBlock>{`curl -X PUT http://localhost:5000/api/updatebeat/6711c7ed9b6a766f9f5a4120 \
   -H "Content-Type: application/json" \
   -d '{"status": "for sale"}'`}</CodeBlock>
http://localhost:5000/api/updatebeat/:id
<CodeBlock>{`curl -X GET http://localhost:5000/api/socials`}</CodeBlock>
      
 <CodeBlock>{`curl -X POST http://localhost:5000/api/socials \
  -H "Content-Type: application/json" \
  -d '{"name": "Twitter", "link": "http://example.com"}'
`}</CodeBlock>     
      
        </div>
    )
}
export default Curl