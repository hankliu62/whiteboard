import { useEffect, useState } from 'react';

function useTopWindow() {
  const [isTop, setIsTop] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsTop(window === window.top);
    }, 16);
  }, []);

  return isTop;
}

export default useTopWindow;
