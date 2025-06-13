import React, { useState } from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection = () => {
 
  return (
    <section id="contact" className="py-20 px-4 bg-black text-white lg:min-h-[650px]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-red-800">Contáctame</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo/>
          <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

