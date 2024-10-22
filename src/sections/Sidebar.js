import React, { useState } from 'react';
import CreatingComponent from '../content/CreatingComponent'
import Condition from '../content/Condition';
import CreatingMultipleElement from '../content/CreatingMultipleElement'
import FilterandSearch from '../content/FilterandSearch'
import AddNewItemToArray from '../content/AddNewItemToArray'
import RemoveItemToArray from '../content/RemoveItemToArray'
import Toggle from '../content/Toggle'
import TailwindCustomizingColors from '../content/TailwindCustomizingColors'
import FindingIDFromJSONData from '../content/FindingIDFromJSONData'
import AddToCart from '../content/AddToCart'
import AddToCart2 from '../content/AddToCart2'
import AddToCart3 from '../content/AddToCart3'
import DesignTable from '../content/DesignTable'
import DesignDropdown from '../content/DesignDropdown'
import DesignDrawer from '../content/DesignDrawer'
import DesignPopup from '../content/DesignPopup'
import Bookmarks from '../content/Bookmarks'
import Bookmarks2 from '../content/Bookmarks2'
import Flexbox from '../content/Flexbox'
import ObjectFit from '../content/ObjectFit'
import DesignCard from '../content/DesignCard'
import DesignSearchTable from '../content/DesignSearchTable'
import CreatingReactJSandTailwindCSS from '../content/CreatingReactJSandTailwindCSS'
import Git from '../content/Git'
import DesignPagination from '../content/DesignPagination'
import DesignPagination2 from '../content/DesignPagination2'
import DynamicPagesWithReactHooks from '../content/DynamicPagesWithReactHooks'
import Promise from '../content/Promise'
import UseState from '../content/UseState'
import UseEffect from '../content/UseEffect'
import UseRef from '../content/UseRef'
import Shortcuts from '../content/Shortcuts'
import TailwindReusingStyles from '../content/TailwindReusingStyles'
import TailwindCustomStyles from '../content/TailwindCustomStyles'
import PreventScrollWhenModalIsOpen from '../content/PreventScrollWhenModalIsOpen'
import SendEmail from '../content/SendEmail';
import UseQuery from '../content/UseQuery';
import BestPractices from '../content/BestPractices';
import UseEffectPagination from '../content/UseEffectPagination';
import ExpressCRUD from '../content/ExpressCRUD';
import Curl from '../content/Curl';
import Props from '../content/Props';
import OptionalChaining from '../content/OptionalChaining';
import ReactRouter1 from '../content/ReactRouter1';
import ExpressRouting from '../content/ExpressRouting';



const pages = [
  { id:18, name:'Bookmarks', path:'/Bookmarks', content: <Bookmarks/>},
  { id:23, name:'Bookmarks 2', path:'/Bookmarks2', content: <Bookmarks2/>},
  { id:24, name:'Creating React JS and Tailwind CSS', path:'/CreatingReactJSandTailwindCSS', content: <CreatingReactJSandTailwindCSS/>},
  { id:25, name:'Git and Github', path:'/Git', content: <Git/>},
  { id: 1, name: 'JSX: Creating Component', path: '/CreatingComponent', content: <CreatingComponent/> },
  { id: 2, name: 'JSX: Condition', path: '/Condition', content: <Condition/> },
  { id: 3, name: 'JSX: Creating Multiple Element', path: '/CreatingMultipleElement', content: <CreatingMultipleElement/> },
  { id: 4, name: 'JSX: Filter and Search', path: '/FilterandSearch', content: <FilterandSearch/>},
  { id: 5, name: 'JSX: Add New Item To Array', path: '/AddNewItemToArray', content: <AddNewItemToArray/> },
  { id: 6, name: 'JSX: Remove Item To Array', path: '/RemoveItemToArray', content: <RemoveItemToArray/> },
  { id:7, name:'JSX: Toggle', path:'/Toggle', content: <Toggle/>},
  { id:9, name:'JSX: Finding id from Json Data', path:'/FindingIDFromJSONData', content: <FindingIDFromJSONData/>},
  { id:8, name:'Tailwind: Customizing Colors', path:'/TailwindCustomizingColors', content: <TailwindCustomizingColors/>},
  { id:34, name:'Tailwind: Reusing Styles', path:'/TailwindReusingStyles', content: <TailwindReusingStyles/>},
  { id:34, name:'Tailwind: Custom Styles', path:'/TailwindCustomStyles', content: <TailwindCustomStyles/>},
  
  { id:21, name:'Component: Card', path:'/DesignCard', content: <DesignCard/>},
  { id:22, name:'Component: Search Table', path:'/DesignSearchTable', content: <DesignSearchTable/>},
  { id:14, name:'Component: Table', path:'/DesignTable', content: <DesignTable/>},
  { id:15, name:'Component: Dropdown', path:'/DesignDropdown', content: <DesignDropdown/>},
  { id:16, name:'Component: Drawer', path:'/DesignDrawer', content: <DesignDrawer/>},
  { id:17, name:'Component: Popup', path:'/DesignPopup', content: <DesignPopup/>},
  { id:11, name:'Component: Add to cart', path:'/AddToCart', content: <AddToCart/>},
  { id:12, name:'Component: Add to cart 2', path:'/AddToCart2', content: <AddToCart2/>},
  { id:13, name:'Component: Add to cart 3', path:'/AddToCart3', content: <AddToCart3/>},
  { id:19, name:'CSS: Flexbox', path:'/Flexbox', content: <Flexbox/>},
  { id:20, name:'CSS: Object Fit', path:'/ObjectFit', content: <ObjectFit/>},
  { id:26, name:'Component: Pagination', path:'/DesignPagination', content: <DesignPagination/>},
  { id:27, name:'Component: Pagination 2', path:'/DesignPagination2', content: <DesignPagination2/>},
  { id:28, name:'React Hooks: Dynamic Pages', path:'/DynamicPagesWithReactHooks', content: <DynamicPagesWithReactHooks/>},
  { id:29, name:'Promise', path:'/Promise', content: <Promise/>},
  { id:30, name:'UseState', path:'/UseState', content: <UseState/>},
  { id:31, name:'UseEffect', path:'/UseEffect', content: <UseEffect/>},
  { id:35, name:'useQuery', path:'/UseQuery', content: <UseQuery/>},
  { id:32, name:'UseRef', path:'/UseRef', content: <UseRef/>},
  { id:33, name:'Shortcuts', path:'/Shortcuts', content: <Shortcuts/>},
  { id:34, name:'JSX: Prevent scroll when modal is open', path:'/PreventScrollWhenModalIsOpen', content: <PreventScrollWhenModalIsOpen/>},
  { id:35, name:'JSX: Send Email - Resend', path:'/SendEmail', content: <SendEmail/>},
  { id:36, name:'Best Practices', path:'/BestPractices', content: <BestPractices/>},
  { id:37, name:'UseEffect Pagination', path:'/UseEffectPagination', content: <UseEffectPagination/>},
  { id:38, name:'ExpressJS: CRUD + Mongoose/MongoDB', path:'/ExpressCRUD', content: <ExpressCRUD/>},
  { id:39, name:'Curl', path:'/Curl', content: <Curl/>},
  { id:40, name:'Props', path:'/Props', content: <Props/>},
  { id:41, name:'OptionalChaining', path:'/OptionalChaining', content: <OptionalChaining/>},
  { id:42, name:'ReactRouter1', path:'/ReactRouter1', content: <ReactRouter1/>},
  { id:43, name:'ExpressRouting', path:'/ExpressRouting', content: <ExpressRouting/>},
  
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
                  className={`w-full text-sm text-left px-3 py-2 rounded-lg hover:bg-primary-500 transition-colors duration-200 text-nowrap overflow-clip hover:overflow-scroll ${
                    selectedPage.id === page.id ? 'bg-secondary-400 text-secondary-300' : ''
                  }`}
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
}

export default SidebarLayout;