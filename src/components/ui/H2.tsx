import React from "react";

interface H2Props extends React.HTMLProps<HTMLHeadingElement> {
  _className?: string;
}

export default function H2({
  _className,
  children,
  ...rest
}: H2Props): JSX.Element {
  return (
    <h2
      {...rest}
      className={`font-bold text-[3.2rem] transition-all duration-300  ${_className}`}
    >
      {children}
    </h2>
  );
}
