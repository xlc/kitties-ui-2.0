import React from 'react';

import KittyAvatar from './KittyAvatar';
import withKitty, { Props } from './withKitty';

const LoadKittyAvatar = ({ kitties_kitties: kitty }: Props) =>
  (kitty && kitty.isSome) ? <KittyAvatar dna={kitty.unwrap().dna} /> : <div>Loading...</div>;

export default withKitty(LoadKittyAvatar);
