import React from 'react';
import NavLink from './NavLink';
import { navigationItems } from '../../data/Header/navigationData';

const MobileNavigation = ({ isMenuOpen, handleNavClick, getLinkClasses }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden bg-gray-800">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {navigationItems.map((item) => (
          <NavLink
            key={item.id}
            item={item}
            onClick={handleNavClick}
            className={`${getLinkClasses(item.section).mobile} w-full text-left`}
            isMobile
          />
        ))}
      </div>
    </div>
  );
};

export default MobileNavigation;