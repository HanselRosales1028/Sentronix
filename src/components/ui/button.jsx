// src/components/ui/button.jsx
export function Button({ children, className, ...props }) {
    return (
      <button
        className={`px-6 py-3 rounded-xl font-semibold transition-colors duration-200 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  