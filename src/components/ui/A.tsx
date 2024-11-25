import React from "react";

interface AProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export default function A(props: AProps): JSX.Element {
  return (
    <a
      {...props}
      className="text-neutral-800 font-normal text-[1.8rem] transition-all duration-300 hover:text-purple-600  dark:text-neutral-50 dark:hover:text-purple-400 dark:hover:font-medium"
    >
      {props.children}
    </a>
  );
}
