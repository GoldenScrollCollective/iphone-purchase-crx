import React from 'react';
import { useStopwatch } from 'react-timer-hook';

import { storeZipList } from '../constants';

interface DefaultValue {
  isLoading: boolean;
  storeIndex: number;
}

interface Props {
  children: React.ReactNode;
}

const StoreContext = React.createContext<DefaultValue>({
  isLoading: false,
  storeIndex: 0
});

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const { totalSeconds, pause, start } = useStopwatch({ autoStart: true });

  const [isLoading, setLoading] = React.useState(false);
  const [storeIndex, setStoreIndex] = React.useState(0);

  React.useEffect(() => {
    handleTotalSeconds();
  }, [totalSeconds]);

  const handleTotalSeconds = () => {
    console.log({ totalSeconds });
    const index = totalSeconds % storeZipList.length;
    setStoreIndex(index);
  };

  const memoedValue = React.useMemo(
    () => ({
      isLoading,
      storeIndex
    }),
    [isLoading, storeIndex]
  );

  return (
    <StoreContext.Provider value={memoedValue}>
      {children}
    </StoreContext.Provider>
  );
};

export function useStores() {
  return React.useContext(StoreContext);
}
