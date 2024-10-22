import React from 'react'

function BestPractices() {
  return (
    <div>

<ul>
    <li>always enclose with <> </></li>
    <li>always have add key in li</li>
    <li>always remove unused variables</li>
    <li>values should be at the top of the file. e.g: var max_todos = 3;  so it easier to update.</li>
    <li>create an example of textfield, and use .includes if the user words like “password” </li>
    <li>avoid adding the initial value like array list inside the function, put it outside</li>
    <li>use UseQuery on elements that no need re-rendering, this is good for the backend, as it wont need to fetch again the data from back end and it is good for the user experience, no need to load again</li>
    <li>use svg for icons: https://www.figma.com/design/QBmOKqyhDARYEc8BZWkXIt/%E2%9D%96-Untitled-UI-%E2%80%93-FREE-Figma-UI-kit-and-design-system-v2.0-(Community)?node-id=1027-7346&node-type=frame&t=BoExaP1guGI8SLs7-0</li>
    <li>use svg for icons: https://www.figma.com/community/file/1020079203222518115/untitled-ui-free-figma-ui-kit-and-design-system-v2-0</li>

</ul>
    </div>
  )
}

export default BestPractices