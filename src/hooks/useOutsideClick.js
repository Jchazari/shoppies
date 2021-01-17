import { useEffect } from 'react';

function useOutsideClick(ref, callback) {
  useEffect(() => {
    function handleClick(e) {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
  
      callback();
    }

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    }
  });
}

export default useOutsideClick;