import React from 'react';
import styled from 'styled-components';
import { AddressMini } from '@polkadot/react-components';

import KittyAvatar from './KittyAvatar';
import withKitty, { Props } from './withKitty';

const Wrapper = styled.div`
  border: 2px solid #eee;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
  width: 300px;
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
    return (
      <Wrapper>
        <StyledKittyAvatar dna={kitty.unwrap().dna} />
        <Line />
        <label>Kitty ID: {kittyId.toString()}</label>
        <label>
          Owner:
          <AddressMini
            value={owner && owner.unwrap()}
          />
        </label>
      </Wrapper>
    );
  }
  return <div>Loading...</div>;
};

export default withKitty(KittyCard);
