// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import BN from 'bn.js';
import { Button, TxButton, InputNumber } from '@polkadot/react-components';

import { KittyIndex } from './types';

type Props = {
  accountId?: string
};
type State = {
  parentKittyId1?: KittyIndex,
  parentKittyId2?: KittyIndex
};

export default class KittyActions extends React.PureComponent<Props> {
  state: State = {
    parentKittyId1: undefined,
    parentKittyId2: undefined
  };

  private onSetParentKittyId1 = (id?: BN) => {
    this.setState({
      parentKittyId1: id && new KittyIndex(id)
    });
  }

  private onSetParentKittyId2 = (id?: BN) => {
    this.setState({
      parentKittyId2: id && new KittyIndex(id)
    });
  }

  render () {
    const { accountId } = this.props;
    const { parentKittyId1, parentKittyId2 } = this.state;

    return (
      <section>
        <h1>Kitty Actions</h1>
        <div className='ui--row'>
          <div className='large'>
            <Button.Group>
              <TxButton
                accountId={accountId}
                label='Create New Kitty'
                params={[]}
                tx='kitties.create'
              />
            </Button.Group>
          </div>
        </div>
        <div className='ui--row'>
          <div className='large'>
            <InputNumber
              label='First Parent Kitty ID'
              onChange={this.onSetParentKittyId1}
            />
            <InputNumber
              label='Second Parent Kitty ID'
              onChange={this.onSetParentKittyId2}
            />
            <Button.Group>
              <TxButton
                accountId={accountId}
                label='Breed Kitty'
                params={[parentKittyId1, parentKittyId2]}
                tx='kitties.breed'
              />
            </Button.Group>
          </div>
        </div>
      </section>
    );
  }
}
