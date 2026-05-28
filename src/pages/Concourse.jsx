import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import SectorGrid from '../components/SectorGrid';
import Watchlist from '../components/Watchlist';
import ProtocolSnapshots from '../components/ProtocolSnapshots';
import LatestDossiers from '../components/LatestDossiers';
import MacroExposures from '../components/MacroExposures';
import SubscribeModal from '../components/SubscribeModal';

export default function Concourse() {
  const { isSignedIn, user } = useUser();
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);

  // Premium check via Clerk publicMetadata — set to true after Stripe payment confirmed
  const isPremium = isSignedIn && user?.publicMetadata?.isPremium === true;

  const openSubscribe = () => setShowSubscribeModal(true);
  const closeSubscribe = () => setShowSubscribeModal(false);

  return (
    <>
      <SectorGrid onSubscribe={openSubscribe} />
      <Watchlist onSubscribe={openSubscribe} />
      <ProtocolSnapshots isPremium={isPremium} onSubscribe={openSubscribe} />
      <LatestDossiers isPremium={isPremium} onSubscribe={openSubscribe} />
      <MacroExposures />

      {showSubscribeModal && <SubscribeModal onClose={closeSubscribe} />}
    </>
  );
}
