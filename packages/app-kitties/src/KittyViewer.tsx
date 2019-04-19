import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { withCalls } from '@polkadot/react-api/with';

import { Kitty } from './types';
import LoadKittyAvatar from './LoadKittyAvatar';

const Wrapper = styled.section``;

type Props = {
  kitties_kittiesCount?: BN
};
type State = {};

class KittyViewer extends React.PureComponent<Props, State> {

  render () {
    const { kitties_kittiesCount } = this.props;
    const count = kitties_kittiesCount ? kitties_kittiesCount.toNumber() : 0;
    const kitties = [];
    for (let i = 0; i < count; ++i) {
      kitties.push(<LoadKittyAvatar key={i} kittyId={new BN(i)} />);
    }
    return (
      <Wrapper>
        <h1>Substrate Kitties</h1>
        <h2>
          Total kitties count: {count}
        </h2>
        { kitties }
      </Wrapper>
    );
  }
}

export default withCalls<Props>(
  'query.kitties.kittiesCount'
)(KittyViewer);
