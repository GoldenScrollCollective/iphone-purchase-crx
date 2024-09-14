import React from 'react';

import './styles.css';

import { useStores } from '../../context';
import { storeZipList } from '../../constants';
import { clsxm } from '../../lib';

interface Props {
  className?: string;
}

export const StoreList: React.FC<Props> = ({ className = '' }) => {
  const { storeIndex } = useStores();

  return (
    <div className={clsxm('store-list', className)}>
      {storeZipList.map((zip, index) => (
        <div
          key={index}
          className={clsxm(
            'store-list-item',
            index === storeIndex ? 'active' : ''
          )}
        >
          {zip}
        </div>
      ))}
    </div>
  );
};
