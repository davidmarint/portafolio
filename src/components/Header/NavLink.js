import React from 'react';

const NavLink = ({ item, onClick, className, isHomePage, isMobile }) => {
  const getTitle = () => {
    if (isHomePage) {
      return `Ir a ${item.label}`;
    }
    return `Ir al home → ${item.label}`;
  };

  const Component = isMobile ? 'button' : 'button';

  return (
    <Component
      onClick={(e) => onClick(e, item.section)}
      className={className}
      title={!isMobile ? getTitle() : undefined}
    >
      {item.label}
    </Component>
  );
};

export default NavLink;