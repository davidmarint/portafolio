import React from 'react';
import FormField from './FormField';
import SuccessMessage from './SuccessMessage';
import { useContactForm } from '../../hooks/useContactForms';

const ContactForm = () => {
  const { formData, isSubmitted, handleChange, handleSubmit,} = useContactForm();

  if (isSubmitted) {
    return (
      <SuccessMessage message="¡Mensaje enviado con éxito! Pronto me pondré en contacto contigo." />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        id="name"
        name="name"
        label="Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      
      <FormField
        id="email"
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      
      <FormField
        id="message"
        name="message"
        type="textarea"
        label="Mensaje"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        required
      />
      
      <button
        type="submit"
        className="w-full py-3 bg-red-800 text-white font-bold rounded-md hover:bg-red-600 transition-colors"
      >
        Enviar Mensaje
      </button>
    </form>
  );
};

export default ContactForm;