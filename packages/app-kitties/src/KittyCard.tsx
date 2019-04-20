import React from 'react';
import styled from 'styled-components';
import { AddressMini } from '@polkadot/react-components';
import { u8aToHex } from '@polkadot/util';

import KittyAvatar from './KittyAvatar';
import withKitty, { Props } from './withKitty';

const Wrapper = styled.div`
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  width: 333px;
`;

const StyledKittyAvatar = styled(KittyAvatar)`
  margin: auto;
`;

const Line = styled.div`
  height: 2px;
  background: #eee;
  margin: 10px -10px;
`;

const KittyCard = ({ kittyId, kitty, owner }: Props) => {
  if (kitty && kitty.isSome) {
    const dna = kitty.unwrap().dna;
    return (
      <Wrapper>
        <StyledKittyAvatar dna={dna} />
        <Line />
        <label>Kitty ID: {kittyId.toString()}</label>
        <label>
          Owner:
          <AddressMini
            value={owner && owner.unwrap()}
          />
        </label>
        <label>DNA: {u8aToHex(dna)}</label>
      </Wrapper>
    );
  }
  return <div>Loading...</div>;
};

export default withKitty(KittyCard);
