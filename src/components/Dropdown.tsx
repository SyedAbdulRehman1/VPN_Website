
import classNames from 'classnames';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
type DropdownProps = {
  srcClass: string,
  children: ReactNode,
  childrenClass: string,
  title: string | ReactNode
}
const GenericDropdown: React.FC<DropdownProps> = (props: DropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    // Add a click event listener to the document body
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <span ref={dropdownRef}>
      <button
        type="button"
        data-dropdown-toggle="language-dropdown"
        className={classNames(props.srcClass)}
        onClick={toggleDropdown}
      >
        {props.title}
        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
      </button>
      {/* Dropdown */}
      {isDropdownOpen && 
      (<div className={classNames(isDropdownOpen ? 'block' : 'hidden', props.childrenClass)} >
             {props.children}     
      </div>)
      }
    </span>
  );
};

export default GenericDropdown;
