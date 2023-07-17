import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import list from './list.json';

function DropDown({selectedOption,setSelectedOption}) {

  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative flex flex-col items-center w-[340px] rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-lead p-4 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300ms active:text-white"
      >
        {selectedOption ? selectedOption.Name : 'Select a Month:'}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>
      {isOpen && (
        <div
          className="bg-lead absolute top-20 flex flex-col items-start rounded-lg w-full overflow-hidden"
          style={{ zIndex: 9999 }} // Set a high z-index value
        >
          
          {list.map((item, i) => (
            <div
              className="flex w-full justify-between p-4 hover:opacity-75 transition-opacity duration-150 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-white border-l-4"
              key={i}
              onClick={() => handleOptionClick(item)}
            >
              <h3 className="font-bold">{item.Name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;