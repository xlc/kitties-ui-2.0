/* eslint-disable @typescript-eslint/camelcase */
// Copyright 2017-2019 @polkadot/app-staking authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { BareProps } from '@polkadot/react-components/types';
import { ComponentProps } from '../types';

import React from 'react';
import { HeaderExtended } from '@polkadot/api-derive';
import { withCalls, withMulti } from '@polkadot/react-api/with';
import { formatNumber } from '@polkadot/util';

import CurrentList from './CurrentList';
import Summary from './Summary';
import { withApi } from '@polkadot/react-api';
import { ApiProps } from '@polkadot/react-api/types';

interface Props extends ApiProps, BareProps, ComponentProps {
  chain_subscribeNewHeads?: HeaderExtended;
}

class Overview extends React.PureComponent<Props> {
  public render (): React.ReactNode {
    const { chain_subscribeNewHeads, allControllers, allStashes, recentlyOffline, currentValidatorsControllersV1OrStashesV2, isSubstrateV2 } = this.props;
    let nextSorted: string[];

    if (isSubstrateV2) {
      // this is a V2 node currentValidatorsControllersV1OrStashesV2 is a list of stashes
      nextSorted = allStashes.filter((address): boolean =>
        !currentValidatorsControllersV1OrStashesV2.includes(address)
      );
    } else {
      // this is a V1 node currentValidatorsControllersV1OrStashesV2 is a list of controllers
      nextSorted = allControllers.filter((address): boolean =>
        !currentValidatorsControllersV1OrStashesV2.includes(address)
      );
    }

    let lastBlock = '—';
    let lastAuthor: string | undefined;

    if (chain_subscribeNewHeads) {
      lastBlock = formatNumber(chain_subscribeNewHeads.number);
      lastAuthor = (chain_subscribeNewHeads.author || '').toString();
    }

    return (
      <div className='staking--Overview'>
        <Summary
          allControllers={allControllers}
          currentValidatorsControllersV1OrStashesV2={currentValidatorsControllersV1OrStashesV2}
          lastBlock={lastBlock}
          lastAuthor={lastAuthor}
          next={nextSorted}
        />
        <CurrentList
          currentValidatorsControllersV1OrStashesV2={currentValidatorsControllersV1OrStashesV2}
          lastBlock={lastBlock}
          lastAuthor={lastAuthor}
          next={nextSorted}
          recentlyOffline={recentlyOffline}
        />
      </div>
    );
  }
}

export default withMulti(
  Overview,
  withApi,
  withCalls<Props>(
    'derive.chain.subscribeNewHeads'
  )
);
