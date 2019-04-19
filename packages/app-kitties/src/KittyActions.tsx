// Copyright 2017-2019 @polkadot/app-123code authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import BN from 'bn.js';
import React from 'react';
import { Button, TxButton } from '@polkadot/react-components';

type Props = {
  accountId?: string
};
type State = {
};

export default class KittyActions extends React.PureComponent<Props> {
  state: State = {};

  render () {
    const { accountId } = this.props;

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
      </section>
    );
  }
}
