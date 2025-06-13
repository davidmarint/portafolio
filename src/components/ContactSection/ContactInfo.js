import React from 'react';
import ContactInfoItem from './ContactInfoItem';

const ContactInfo = () => {
  const contactItems = [
    {
      id: 'email',
      icon: (
        <svg className="w-6 h-6 mr-4 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: 'maicolmarin0126@gmail.com'
    },
    {
      id: 'phone',
      icon: (
        <svg className="w-6 h-6 mr-4 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: '+57 3208638368'
    }
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
      <div className="space-y-4">
        {contactItems.map(item => (
          <ContactInfoItem key={item.id} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;