import NamedDivider from '@site/src/components/NamedDivider.js';

Associates an address to:
* `tokens` the number of tokens it owns
* `allowance` that associates a <i>spender</i> address to the quantity it is allowed to spend

<NamedDivider title="Code" width="1.5"/>

```archetype
asset ledger identified by holder to big_map {
  holder     : address;
  tokens     : nat = 0;
  allowance  : map<address, nat> = [];
} initialized with {
  { holder = caller; tokens = total_supply }
}
```

[`asset`](/docs/reference/declarations/storage#asset) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`map`](/docs/reference/types#map<K,%20V>) [`caller`](/docs/reference/expressions/constants#caller)