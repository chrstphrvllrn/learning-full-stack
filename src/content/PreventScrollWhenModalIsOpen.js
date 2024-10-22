import React, {useEffect, useState} from 'react'
import CodeBlock from '../components/CodeBlock'

function PreventScrollWhenModalIsOpen() {
    const [isPopupVisible, setIsPopupVisible] = useState(false);


      // Function to close the pop-up
    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
        console.log("closePopup")
    };

    useEffect(() => {
        document.body.style.overflow = isPopupVisible ? "hidden" : "unset";
    }, [isPopupVisible]);
    


  return (
    <div className='bg-white w-full h-[110vh] overflow-y-scroll'>

    <div >
        <button onClick={togglePopup} className='py-4 px-8 rounded-lg border bg-blue-400 text-white'>open</button>
         <br></br>
         <br></br>
          {isPopupVisible && (
            <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-lg"
                onClick={togglePopup} // Close pop-up when clicking on the background
            ></div>
           ) }
    </div>
        
     
<CodeBlock>{`  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);`}</CodeBlock>

source: https://stackoverflow.com/questions/54989513/react-prevent-scroll-when-modal-is-open
    </div>
  )
}

export default PreventScrollWhenModalIsOpen