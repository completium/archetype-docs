Type of an asset value generated from asset declaration. An asset value is a record that provides all asset fields but the asset identifier field(s).

Consider for example the following asset declaration:
```archetype
asset result {
  id    : string;
  score : nat;
  time  : duration;
}
```

The asset value for `result` is the record with `score` and `time` fields. Hence `asset_value<result>` is equivalent to the following declaration:
```archetype
record ledger_asset_value {
  score : nat;
  time  : duration;
}
```

An asset record value is returned by the [`[]`](/docs/reference/expressions/asset#ak--asset_keya) asset method (and [`get`](/docs/reference/expressions/asset#agetk--asset_keya)). As for any record, fields are accessed normally with `.` operator:
```archetype
const v : asset_value<result> = result["#sub001"];
const s = v.score;
const t = v.time;
```




