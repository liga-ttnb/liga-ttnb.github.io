'use client'; // IMPORTANTE - convierte a componente cliente

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
};

const Button = ({ children, onClick, variant = 'primary' }: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded transition-colors ${
        variant === 'primary' 
          ? 'bg-blue-500 hover:bg-blue-600 text-white' 
          : 'bg-gray-200 hover:bg-gray-300 text-black'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;