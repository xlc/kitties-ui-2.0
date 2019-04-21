// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import React from 'react';
import BN from 'bn.js';
import { Button, TxButton, InputNumber, InputAddress, InputBalance } from '@polkadot/react-components';

import { KittyIndex } from './types';

type Props = {
  accountId?: string
};
type State = {
  parentKittyId1?: KittyIndex,
  parentKittyId2?: KittyIndex,
  recipientId?: string,
  transferKittyId?: KittyIndex,
  sellKittyId?: KittyIndex,
  sellKittyPrice?: BN
};

export default class KittyActions extends React.PureComponent<Props> {
  state: State = {};

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

  private onSetRecipient = (recipientId?: string) => {
    this.setState({ recipientId });
  }

  private onSetTransferKittyId = (transferKittyId?: BN) => {
    this.setState({ transferKittyId: transferKittyId && new KittyIndex(transferKittyId) });
  }

  private onSetSellKittyId = (sellKittyId?: BN) => {
    this.setState({ sellKittyId: sellKittyId && new KittyIndex(sellKittyId) });
  }

  private onSetSellKittyPrice = (sellKittyPrice?: BN) => {
    this.setState({ sellKittyPrice });
  }

  render () {
    const { accountId } = this.props;
    const {
      parentKittyId1, parentKittyId2,
      recipientId, transferKittyId,
      sellKittyId, sellKittyPrice
    } = this.state;

    return (
      <section>
        <h1>Kitty Actions</h1>
        <h2>Create Kitty</h2>
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
        <h2>Breed Kitty</h2>
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
        <h2>Transfer Kitty</h2>
        <div className='ui--row'>
          <div className='large'>
            <InputAddress
              label='recipient address'
              onChange={this.onSetRecipient}
            />
            <InputNumber
              label='Kitty ID to send'
              onChange={this.onSetTransferKittyId}
            />
            <Button.Group>
              <TxButton
                accountId={accountId}
                label='Transfer Kitty'
                params={[recipientId, transferKittyId]}
                tx='kitties.transfer'
              />
            </Button.Group>
          </div>
        </div>
        <h2>Sell Kitty</h2>
        <div className='ui--row'>
          <div className='large'>
            <InputNumber
              label='Kitty ID to sell'
              onChange={this.onSetSellKittyId}
            />
            <InputBalance
              label='Kitty Price to sell'
              onChange={this.onSetSellKittyPrice}
            />
            <Button.Group>
              <TxButton
                accountId={accountId}
                label='Set Kitty Price'
                params={[sellKittyId, sellKittyPrice]}
                tx='kitties.ask'
              />
            </Button.Group>
          </div>
        </div>
      </section>
    );
  }
}
