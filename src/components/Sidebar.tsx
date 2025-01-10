// src/components/Sidebar.tsx

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleSidebar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeSidebar}></div>}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav>
          <ul>
            <li>
            <NavLink
                to="/"
                onClick={closeSidebar}
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
              >
                Home
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/research"
                onClick={closeSidebar}
                className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}
              >
                Research
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeSidebar = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {/* Hamburger Icon */}
//       <div className="hamburger" onClick={toggleSidebar}>
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>

//       {/* Overlay */}
//       {isOpen && <div className="overlay" onClick={closeSidebar}></div>}

//       {/* Sidebar */}
//       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/" onClick={closeSidebar}>
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/research" onClick={closeSidebar}>
//                 Research
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };
// export default Sidebar;

// import React, { useState } from 'react';
// import './Sidebar.css';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Hamburger Icon */}
//       <div className="hamburger" onClick={toggleSidebar}>
//         <div className="line"></div>
//         <div className="line"></div>
//         <div className="line"></div>
//       </div>

//       {/* Sidebar */}
//       <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//         <nav>
//           <ul>
//             <li>Home</li>
//             <li>Research</li>
//             <li>Writting</li>
//             <li>Reading</li>
//           </ul>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;