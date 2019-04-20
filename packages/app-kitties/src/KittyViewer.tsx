import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { withCalls } from '@polkadot/react-api/with';

import KittyCard from './KittyCard';

const Wrapper = styled.section``;
const KittiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

type Props = {
  kittiesCount?: BN
};

const KittyViewer = ({ kittiesCount }: Props) => {
  const count = kittiesCount ? kittiesCount.toNumber() : 0;
  const kitties = [];
  for (let i = 0; i < count; ++i) {
    kitties.push(<KittyCard key={i} kittyId={new BN(i)} />);
  }
  return (
    <Wrapper>
      <h1>Substrate Kitties</h1>
      <h2>
        Total kitties count: {count}
      </h2>
      <KittiesWrapper>
      { kitties }
      </KittiesWrapper>
    </Wrapper>
  );
};

export default withCalls<Props>(
  ['query.kitties.kittiesCount', { propName: 'kittiesCount' }]
)(KittyViewer);
