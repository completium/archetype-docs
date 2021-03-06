import NamedDivider from '@site/src/components/NamedDivider.js';

Approves `spender` to transfer `value` tokens owned by [`caller`](/docs/reference/expressions/constants#caller).

<NamedDivider title="Code" width="1.5"/>

```archetype
entry approve(spender : address, value : nat) {
  const previous = ledger[caller] ? (the.allowance[spender] ? the : 0) : 0;
  do_fail_if(previous > 0 and value > 0, (("UnsafeAllowanceChange", previous)));
  ledger.add_update(caller, { allowance += [(spender, value)] });
}
```

[`entry`](/docs/reference/declarations/entrypoint#entry) [`address`](/docs/reference/types#address) [`nat`](/docs/reference/types#nat) [`const`](/docs/reference/instructions/localvariable#const) [`[]`](/docs/reference/expressions/asset#ak--asset_keya) [`?:`](/docs/reference/expressions/controls#a--b--c) [`do_fail_if`](/docs/reference/instructions/divergent#do_fail_ift--bool-e--t) [`>`](/docs/reference/expressions/operators/arithmetic#a--b-11) [`put`](/docs/reference/instructions/containers#mputk-v)

