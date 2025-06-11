import React from 'react';
import NavLink from './NavLink';
import { navigationItems } from '../../data/Header/navigationData';

const DesktopNavigation = ({ handleNavClick, getLinkClasses, isHomePage }) => {
  return (
    <div className="hidden md:block">
      <div className="ml-10 flex items-baseline space-x-4">
        {navigationItems.map((item) => (
          <NavLink
            key={item.id}
            item={item}
            onClick={handleNavClick}
            className={getLinkClasses(item.section).desktop}
            isHomePage={isHomePage}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;