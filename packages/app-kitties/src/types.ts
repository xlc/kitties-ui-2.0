import { u32, u128, Struct, Option, ClassOf } from '@polkadot/types';

export class Kitty extends u128 {
  get dna (): Uint8Array {
    return this.toU8a();
  }
}

export class KittyIndex extends u32 {
}

export class KittyLinkedItem extends Struct {
  constructor (value: any) {
    super({
      prev: ClassOf('Option<KittyIndex>' as any),
      next: ClassOf('Option<KittyIndex>' as any)
    }, value);
  }

  get prev (): Option<KittyIndex> {
    return this.get('prev') as Option<KittyIndex>;
  }

  get next (): Option<KittyIndex> {
    return this.get('next') as Option<KittyIndex>;
  }
}
