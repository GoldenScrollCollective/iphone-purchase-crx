import React from 'react';

import { useStores } from '../../context';
import { colors, memories } from '../../constants';
import { clsxm } from '../../lib';

interface Props {
  className?: string;
}

export const TypeSelector: React.FC<Props> = ({ className = '' }) => {
  const { storeIndex, color, setColor, memory, setMemory } = useStores();

  return (
    <div
      className={clsxm('type-selector', 'flex gap-4 justify-center', className)}
    >
      <div className={clsxm('color-select', 'flex flex-col gap-2')}>
        {colors.map((x, index) => (
          <button
            key={index}
            className={clsxm(
              'color-item',
              color.id === x.id ? 'font-bold, text-[16px]' : ''
            )}
            onClick={() => setColor(x)}
          >
            {x.label}
          </button>
        ))}
      </div>
      <div className={clsxm('memory-select', 'flex flex-col gap-2')}>
        {memories.map((x, index) => (
          <button
            key={index}
            className={clsxm(
              'memory-item',
              memory.id === x.id ? 'font-black, text-[16px]' : ''
            )}
            onClick={() => setMemory(x)}
          >
            {x.label}
          </button>
        ))}
      </div>
    </div>
  );
};
