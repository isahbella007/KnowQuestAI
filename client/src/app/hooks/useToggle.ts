import { useState } from 'react';

// ----------------------------------------------------------------------

export default function useToggle(defaultChecked?: boolean) {
  const [toggle, setToggle] = useState(defaultChecked || false);

  console.log('in the useToggle')
  return {
    toggle,
    onToggle: () => setToggle(!toggle),
    onOpen: () => setToggle(true),
    onClose: () => setToggle(false),
    setToggle,
  };
}
