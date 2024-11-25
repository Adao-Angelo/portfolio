import React from "react";

interface Props extends React.HTMLProps<HTMLParagraphElement> {
  _className?: string;
}

export default function P({
  _className,
  children,
  ...rest
}: Props): JSX.Element {
  return (
    <p
      {...rest}
      className={`font-regular text-[2rem] transition-all duration-300 ${_className}`}
    >
      {children}
    </p>
  );
}
