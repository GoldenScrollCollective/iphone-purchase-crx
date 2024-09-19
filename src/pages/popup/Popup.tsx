import React from 'react';

import { TypeSelector, StoreList } from '@pages/popup/components';
import { clsxm } from './lib';

export default function Popup(): JSX.Element {
  return (
    <div className={clsxm('container', 'w-[240px] h-[240px] p-2')}>
      <TypeSelector />
      <StoreList className={clsxm('mt-2')} />
    </div>
  );
}
