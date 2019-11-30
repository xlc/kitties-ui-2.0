import React from 'react';
import styled from 'styled-components';
import { withCalls } from '@polkadot/react-api/with';
import { Option } from '@polkadot/types';
import { registry } from '@polkadot/react-api';
import { KittyLinkedItem, KittyIndex, OwnedKittiesKey } from './types';
import KittyCard from './KittyCard';

const KittiesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  &:empty {
    &:after {
      content: "You don't have any kitties";
      margin-bottom: 15px;
      font-size: 1.2em;
    }
  }
`;

type LinkedKittyCardProps = {
  accountKey: OwnedKittiesKey;
  item?: Option<KittyLinkedItem>;
  onNextOwnedKittiesKey: (key: OwnedKittiesKey) => void;
};

const LinkedKittyCardComp = ({ accountKey, item, onNextOwnedKittiesKey }: LinkedKittyCardProps) => {
  if (item && item.isSome) {
    const next = item.unwrap().next;
    if (next.isSome) {
      const nextKey = new OwnedKittiesKey(registry, [accountKey.account, new Option(registry, KittyIndex, next.unwrap())]);
      setTimeout(() => onNextOwnedKittiesKey(nextKey));
    }
  }
  if (accountKey.kittyId.isSome) {
    return <KittyCard kittyId={accountKey.kittyId.unwrap()} showUnlist={true} accountId={accountKey.account.toString()} />;
  }
  return null;
};

const LinkedKittyCard = withCalls<LinkedKittyCardProps>(
  ['query.kitties.ownedKitties', { paramName: 'accountKey', propName: 'item' }]
)(LinkedKittyCardComp);

type Props = {
  accountId?: string;
};

type State = {
  keys: OwnedKittiesKey[];
};

class OwnedKittyViewer extends React.PureComponent<Props, State> {
  state: State = {
    keys: []
  };

  addKey (i: number, key: OwnedKittiesKey) {
    const newKeys = [...this.state.keys];
    const old = newKeys[i];
    if (!key.eq(old)) {
      newKeys[i] = key;
      this.setState({
        keys: newKeys
      });
    }
  }

  render () {
    const { accountId } = this.props;
    const { keys } = this.state;
    if (!accountId) {
      return <span />;
    }
    return (
      <div>
        <h2>My kitties</h2>
        <KittiesWrapper>
          <LinkedKittyCard
            accountKey={new OwnedKittiesKey(registry, [accountId, null])}
            onNextOwnedKittiesKey={key => this.addKey(0, key)}
          />
          {keys.map((key, i) => (
            <LinkedKittyCard
              key={key.toString()}
              accountKey={key}
              onNextOwnedKittiesKey={key => this.addKey(i + 1, key)}
            />
          ))}
        </KittiesWrapper>
      </div>
    );
  }
}

export default OwnedKittyViewer;
