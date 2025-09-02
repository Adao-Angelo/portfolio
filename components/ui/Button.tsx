interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="">
      {children}
    </button>
  );
}
