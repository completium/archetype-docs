Accesses field `f` of asset with key `k` in collection `A`. It returns an option of field value, which is `none` when asset `k` is not found in collection `A`.

For example, consider the `ledger` asset:
```archetype
asset ledger {
  holder : address;
  amount : nat;
}
```

The following returns an option of field `amount` for `caller` asset:
```archetype
const a : option<nat> = ledger[caller]?.amount;
```

It is equivalent to:
```archetype
const a : option<nat> =
  match ledger[caller] with
  | some av -> some(av.amount)
  | none    -> none
  end
```

:::info
When accessing several fields' values of the same asset, it is better gas-wise to retrieve first the [`asset_value`](/docs/reference/types#asset_value<A>) locally with [`[]`](/docs/reference/expressions/asset#ak--asset_keya) operator, and then access a field value with the `.` operator.
:::
