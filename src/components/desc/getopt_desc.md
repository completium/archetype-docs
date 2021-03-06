Returns an option of [`asset_value`](/docs/reference/types#asset_value<A>) value from key `k` in collection `A`. It is `none` if key `k` is not found in collection `A`.

For example, consider the `ledger` asset:
```archetype
asset ledger {
  holder : address;
  amount : nat;
}
```

The following returns an option of the record value associated with `caller` address:
```archetype
const h : option<asset_value<ledger>> = ledger[caller];
```