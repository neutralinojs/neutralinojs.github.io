---
title: Neutralino.computer
---

`Neutralino.computer` namespace contains methods related to the user's hardware.

## computer.getRamUsage()
Provides physical memory details (in megabytes).

### Return object (awaited):
- `ram`
  * `total`: Total physical memory.
  * `available`: Available physical memory.


```js
let ramInfo = await Neutralino.computer.getRamUsage();
console.log(`Your ram size: ${Math.round(ramInfo.total / 1000000)}GB`);
```
