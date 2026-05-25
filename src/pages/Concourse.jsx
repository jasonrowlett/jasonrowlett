import React, { useState } from 'react';
import SectorGrid from '../components/SectorGrid';
import Watchlist from '../components/Watchlist';
import ProtocolSnapshots from '../components/ProtocolSnapshots';
import LatestDossiers from '../components/LatestDossiers';
import MacroExposures from '../components/MacroExposures';
import SubscribeModal from '../components/SubscribeModal';

// isPremium will be wired to Clerk user session in the next build session
const IS_PREMIUM = false;

export default function Concourse() {
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  const openSubscribe = () => setShowSubscribeModal(true);
  const closeSubscribe = () => setShowSubscribeModal(false);

  return (
    <>
      <SectorGrid onSubscribe={openSubscribe} />
      <Watchlist onSubscribe={openSubscribe} />
      <ProtocolSnapshots isPremium={IS_PREMIUM} onSubscribe={openSubscribe} />
      <LatestDossiers isPremium={IS_PREMIUM} onSubscribe={openSubscribe} />
      <MacroExposures />

      {showSubscribeModal && <SubscribeModal onClose={closeSubscribe} />}
    </>
  );
}
