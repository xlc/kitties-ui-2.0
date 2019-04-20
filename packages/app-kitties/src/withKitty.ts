import BN from 'bn.js';
import { Option } from '@polkadot/types';
import { AccountId } from '@polkadot/types/interfaces';
import { withCalls } from '@polkadot/react-api/with';
import { Kitty } from './types';

export type Props = {
  kittyId: BN,
  kitty?: Option<Kitty>,
  owner?: Option<AccountId>
};

export default withCalls<Props>(
  ['query.kitties.kitties', { paramName: 'kittyId', propName: 'kitty' }],
  ['query.kitties.kittyOwners', { paramName: 'kittyId', propName: 'owner' }]
);
