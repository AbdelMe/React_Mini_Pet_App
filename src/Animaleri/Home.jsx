import React, { useState } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={`bg-dark text-white ${isCollapsed ? 'col-1' : 'col-3'} p-3`}
        style={{ transition: 'width 0.3s' }}
      >
        <button
          className="btn btn-light mb-3"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          {isCollapsed ? 'Expand' : 'Collapse'}
        </button>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-white">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="col p-4 w-75">
        <h1>Main Content Area</h1>
        <p>This is the main content section. Adjust the sidebar as needed!</p>
      </div>
    </div>
  );
}

export default Sidebar;
