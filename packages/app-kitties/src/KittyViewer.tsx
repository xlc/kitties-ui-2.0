import React from 'react';
import styled from 'styled-components';
import BN from 'bn.js';
import { withCalls } from '@polkadot/react-api/with';

import { Kitty } from './types';
import KittyAvatar from './KittyAvatar';

const Wrapper = styled.section``;

type Props = {
  kitties_kittiesCount: BN
};
type State = {};

class KittyViewer extends React.PureComponent<Props, State>{

  render () {
    const { kitties_kittiesCount: count } = this.props;
    return (
      <Wrapper>
        <h1>Substrate Kitties</h1>
        {/* { kitties.length === 0 && 'No kitties'}
        { kitties.map(k => (
          <KittyAvatar dna={k.dna} />
        )) } */}
        kitty count: {count && count.toString()}
      </Wrapper>
    );
  }
}

export default withCalls<Props>(
  'query.kitties.kittiesCount'
)(KittyViewer);
