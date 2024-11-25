import React from "react";

interface H1Props extends React.HTMLProps<HTMLHeadingElement> {
  _className?: string;
}

export default function H1({
  _className,
  children,
  ...rest
}: H1Props): JSX.Element {
  return (
    <h1
      {...rest}
      className={`font-bold text-[5.6rem] transition-all duration-300  ${_className}`}
    >
      {children}
    </h1>
  );
}
