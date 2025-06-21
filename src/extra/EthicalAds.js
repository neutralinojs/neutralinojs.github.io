import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { useColorMode } from '@docusaurus/theme-common';

export default function EthicalAds({id, type}) {
  const {colorMode} = useColorMode();
  const [isInitialized, setIsInitialized] = useState(false);
  const [isEthABlocked, setIsEthABlocked] = useState(false)
  useEffect(() => {
    if (isInitialized) {
      return;
    }
    setIsInitialized(true);
    try {
      setIsEthABlocked(typeof ethicalads === 'undefined')
      ethicalads.load_placements()
    } catch (error) {
      setIsEthABlocked(false)
    }
  });
  return (
    <div>
      <div
        data-ea-publisher="neutralino"
        data-ea-type={type}
        id={"neutralino-" + id}
        className={clsx(colorMode, isInitialized && "loaded")}>
      </div>
    </div>
  );
}
