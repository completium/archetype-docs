---
sidebar_position: 6
---
import Builtin from '@site/src/components/Builtin.js';
import { assetbuiltins } from './assetbuiltins.js';

# Asset

### `A[k : asset_key<A>]`

<Builtin data={assetbuiltins["get"]} />

### `A[k : asset_key<A>].f`

<Builtin data={assetbuiltins["getf"]} />

### `A[k : asset_key<A>]?.f`

<Builtin data={assetbuiltins["getof"]} />

### `A.contains(k : asset_key<A>)`

<Builtin data={assetbuiltins["contains"]} />

### `A.count()`

<Builtin data={assetbuiltins["count"]} />

### `A.nth(i : nat)`

<Builtin data={assetbuiltins["nth"]} />

### `A.sort(f)`

<Builtin data={assetbuiltins["sort"]} />

### `A.sum(f)`

<Builtin data={assetbuiltins["sum"]} />

### `A.select(p)`

<Builtin data={assetbuiltins["select"]} />

### `A.head(i : nat)`

<Builtin data={assetbuiltins["head"]} />

### `A.tail(i : nat)`

<Builtin data={assetbuiltins["tail"]} />

### `A.to_container()`

<Builtin data={assetbuiltins["to_container"]} />