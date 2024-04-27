import React from 'react';
import './Breadcrumbs.scss';

interface BreadcrumbProps {
  strings: string[];
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ strings }) => {
  return (
    <div className='d-flex align-items-center'>
      {strings.map((string, index) => (
        <>
          <span key={index}>{string}</span>
          {index < strings.length - 1 ? <span>{' > '}</span> : ''}
        </>
      ))}
    </div>
  );
};

export default Breadcrumbs;
