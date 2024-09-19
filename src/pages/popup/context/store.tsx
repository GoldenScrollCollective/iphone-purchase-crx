import React from 'react';
import { useStopwatch } from 'react-timer-hook';

import { colors, memories, storeZipList } from '../constants';
import { Color, Memory } from '@pages/popup/core';

interface DefaultValue {
  isLoading: boolean;
  storeIndex: number;
  color: Color;
  setColor: React.Dispatch<React.SetStateAction<Color>>;
  memory: Memory;
  setMemory: React.Dispatch<React.SetStateAction<Memory>>;
}

interface Props {
  children: React.ReactNode;
}

const StoreContext = React.createContext<DefaultValue>({
  isLoading: false,
  storeIndex: 0,
  color: colors[0],
  setColor: () => true,
  memory: memories[0],
  setMemory: () => true
});

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const { totalSeconds, pause, start } = useStopwatch({ autoStart: true });

  const [isLoading, setLoading] = React.useState(false);
  const [storeIndex, setStoreIndex] = React.useState(0);
  const [color, setColor] = React.useState<Color>(colors[0]);
  const [memory, setMemory] = React.useState<Memory>(memories[0]);

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
      storeIndex,
      color,
      setColor,
      memory,
      setMemory
    }),
    [isLoading, storeIndex, color, memory]
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
