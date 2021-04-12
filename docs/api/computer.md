---
title: Neutralino.computer
---

Neutralino.computer namespace contains methods related to the user's hardware.

## computer.getRamUsage()
Provides physical memory details (in megabytes).

### Return object (awaited):
- `ram`
  * `total`: Total physical memory.
  * `available`: Available physicual memory.


```
let ramInfo = await Neutralino.app.getRamUsage();
console.log(`Your ram size: ${Math.round(ramInfo.total / 1000000)}GB`);
```
