import { u32, u128, Struct, Option, ClassOf, Tuple } from '@polkadot/types';
import { AccountId } from '@polkadot/types/interfaces';
import { Registry } from '@polkadot/types/types';

export class Kitty extends u128 {
  get dna (): Uint8Array {
    return this.toU8a();
  }
}

export class KittyIndex extends u32 {
}

export class KittyLinkedItem extends Struct {
  constructor (registry: Registry, value: any) {
    super(registry, {
      prev: ClassOf(registry, 'Option<KittyIndex>' as any),
      next: ClassOf(registry, 'Option<KittyIndex>' as any)
    }, value);
  }

  get prev (): Option<KittyIndex> {
    return this.get('prev') as Option<KittyIndex>;
  }

  get next (): Option<KittyIndex> {
    return this.get('next') as Option<KittyIndex>;
  }
}

export class OwnedKittiesKey extends Tuple {
  constructor (registry: Registry, value: any) {
    super(registry, [
      ClassOf(registry, 'AccountId'),
      ClassOf(registry, 'Option<KittyIndex>' as any)
    ], value);
  }

  get account (): AccountId {
    return this[0] as AccountId;
  }

  get kittyId (): Option<KittyIndex> {
    return this[1] as Option<KittyIndex>;
  }
}
