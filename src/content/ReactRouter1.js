import React from 'react'
import CodeBlock from '../components/CodeBlock'

function ReactRouter1() {
  return (
    <div>
        
    <p>App.js</p>
    <CodeBlock>{`
import './App.css';
import Sidebar from './sections/Sidebar'

function App() {
  return (
    <div className="App">
          <Sidebar/>
    </div>
  );
}

export default App;
`}</CodeBlock>

<p>Sidebar.js</p>
<CodeBlock>{`import React, { useState } from 'react';
import CreatingComponent from '../content/CreatingComponent'
import Condition from '../content/Condition';

const pages = [
 { id: 1, name: 'JSX: Creating Component', path: '/CreatingComponent', content: <CreatingComponent/> },
  { id: 2, name: 'JSX: Condition', path: '/Condition', content: <Condition/> },
 
]
function SidebarLayout() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  const filteredPages = pages.filter(page =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageClick = (page) => {
    setSelectedPage(page);
  };

  return (
    <div className="flex max-h-screen bg-primary-100">
      {/* Sidebar */}
      <div className="w-64 bg-primary-50 text-primary-200 p-4 overflow-auto">
        <div className="mb-4">
          
          <div className="flex items-center  bg-secondary-500 rounded-3xl px-4 py-2 w-full max-w-md">
          <svg className='mr-3 size-5'xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
            <input
              type="text"
              placeholder="Search..."
              className="outline-none flex-grow bg-primary-100 text-primary-200 text-sm text-secondary-600"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
   
        <nav>
          <ul className="">
            {filteredPages.map((page) => (
              <li key={page.id}  >
                <button
                  onClick={() => handlePageClick(page)}
                  className={\`w-full text-sm text-left px-3 py-2 rounded-lg hover:bg-primary-500 transition-colors duration-200 text-nowrap overflow-clip hover:overflow-scroll \${
                    selectedPage.id === page.id ? 'bg-secondary-400 text-secondary-300' : ''
                  }\`}
                >
                  {page.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto  ">
        <div className=' px-8 pt-8 pb-4 flex items-center bg-white border-b'>
            <h1 className="text-3xl font-bold text-secondary-300">{selectedPage.name}</h1>
        </div>
        <p className="text-primary-200   px-8 pt-4 pb-8">{selectedPage.content}</p>
      </div>
    </div>
  );
`}</CodeBlock>

    </div>
    
  )
}

export default ReactRouter1