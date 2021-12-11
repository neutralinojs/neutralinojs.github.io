---
title: Neutralino.computer
---

`Neutralino.computer` namespace contains methods related to the user's hardware.

## computer.getMemoryInfo()
Provides physical memory details (in megabytes).

### Return object (awaited):

  - `total` Number: Total physical memory.
  - `available` Number: Available physical memory.


```js
let memoryInfo = await Neutralino.computer.getMemoryInfo();
console.log(`Your ram size: ${Math.round(memoryInfo.total / 1000000)}GB`);
```
