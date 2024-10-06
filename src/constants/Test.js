import * as React from "react";

// Custom Hooks - used for resuable logic
export function One() {
  const { isOpen, setIsOpen } = useDrawerState();
  React.useEffect(() => {
    setIsOpen("1");
  });

  console.log(isOpen);
  return <div>Is Open of Component one: {isOpen}</div>;
}

export function Two() {
  const { isOpen, setIsOpen } = useDrawerState();

  //   const { isOpen, setIsOpen } = useDrawerState();
  return <div>Is Open of Component two: {isOpen}</div>;
}

function useDrawerState() {
  const [isOpen, setIsOpen] = React.useState("0");

  return { isOpen, setIsOpen };
}
