import React from 'react';

const SocialLinks = ({ links }) => {
  return (
    <div className="mt-12 flex justify-center space-x-6 animate-fade-in delay-400">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-300 transition-colors"
          aria-label={link.label}
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d={link.iconPath} clipRule="evenodd" />
          </svg>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;