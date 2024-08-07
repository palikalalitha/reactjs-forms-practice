// YourComponents.js
import React from 'react';

// Basic Form component
export const Form = ({ children, ...props }) => (
  <form {...props}>{children}</form>
);

// Button component with optional styles
export const Button = ({ children, type = 'button', ...props }) => (
  <button type={type} {...props}>
    {children}
  </button>
);

// ButtonGroup component for grouping buttons
export const ButtonGroup = ({ children, orientation = 'horizontal', align = 'left', ...props }) => {
  const styles = {
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' : 'row',
    alignItems: align,
  };
  return <div style={styles} {...props}>{children}</div>;
};

// Input component with label
export const Input = ({ label, name, ...props }) => (
  <div className="input-group">
    {label && <label htmlFor={name}>{label}</label>}
    <input id={name} name={name} {...props} />
  </div>
);

// Checkbox component
export const Checkbox = ({ label, name, ...props }) => (
  <div className="checkbox-group">
    <input type="checkbox" id={name} name={name} {...props} />
    {label && <label htmlFor={name}>{label}</label>}
  </div>
);

// RadioGroup component with radio buttons
export const RadioGroup = ({ label, name, children }) => (
  <div className="radio-group">
    {label && <label>{label}</label>}
    {React.Children.map(children, child => React.cloneElement(child, { name }))}
  </div>
);

// Radio button component
export const Radio = ({ value, children, name, ...props }) => (
  <div className="radio-item">
    <input type="radio" id={value} name={name} value={value} {...props} />
    <label htmlFor={value}>{children}</label>
  </div>
);
