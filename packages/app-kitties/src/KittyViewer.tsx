import React from 'react';
import styled from 'styled-components';

import { Kitty } from './types';
import KittyAvatar from './KittyAvatar';

const Wrapper = styled.section``;

const KittyViewer = ({ kitties }: { kitties: Array<Kitty> }) => (
  <Wrapper>
    <h1>Substrate Kitties</h1>
    { kitties.length === 0 && 'No kitties'}
    { kitties.map(k => (
      <KittyAvatar dna={k.dna} />
    )) }
  </Wrapper>
);

export default KittyViewer;
