import React from 'react';

const ContactInfoItem = ({ icon, text }) => {
  return (
    <div className="flex items-center">
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default ContactInfoItem;
