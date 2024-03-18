---
title: Neutralino.computer
---

`Neutralino.computer` namespace contains methods related to the user's hardware.

## computer.getMemoryInfo()
Returns system memory statistics in bytes.

### Return Object (awaited):

- `physical` Object: Physical memory information.
    - `total` Number: Total physical memory.
    - `available` Number: Available physical memory.
- `virtual` Object: Virtual memory information.
    - `total` Number: Total virtual memory.
    - `available` Number: Available virtual memory.

```js
let memoryInfo = await Neutralino.computer.getMemoryInfo();
console.log(`RAM size: ${memoryInfo.physical.total}B`);
```

## computer.getArch()
Returns the CPU architecture identifier: `x64` (x86 64bit/arm64), `ia32` (x86 32bit), `arm`, `itanium`,
or `unknown`.

### Return String (awaited):
CPU architecture.


```js
let arch = await Neutralino.computer.getArch();
console.log(arch);
```

## computer.getKernelInfo()
Returns operating system kernel information.

### Return Object (awaited):
- `variant` String: Kernel type: `Linux`, `Darwin`, `Windows NT`, or `Unknown`.
- `version` String: Version in the `<major>.<minor>.<patch>-<build_number>` format.


```js
let kernelInfo = await Neutralino.computer.getKernelInfo();
console.log(`Kernel: ${kernelInfo.variant}`);
```

## computer.getOSInfo()
Returns operating system information.

### Return Object (awaited):
- `name` String: Operating system name.
- `description` String: Operating system description.
- `version` String: Version in the `<major>.<minor>.<patch>-<build_number>` format.


```js
let osInfo = await Neutralino.computer.getOSInfo();
console.log(`OS: ${osInfo.name}`);
```

## computer.getCPUInfo()
Returns the CPU information.

### Return Object (awaited):
- `vendor` String: Vendor name.
- `model` String: Model name.
- `frequency` Number: The current CPU frequency in hertz (Hz).
- `architecture` String: CPU architecture name. Returns the same value as the `getArch` function.
- `logicalThreads` Number: Number of logical threads in the parallelism model.
- `physicalCores` Number: Number of physical cores in the CPU.
- `physicalUnits` Number: Number of physical CPU hardware units in the motherboard.


```js
let cpuInfo = await Neutralino.computer.getCPUInfo();
console.log(`CPU model: ${cpuInfo.model}`);
```

## computer.getDisplays()
Returns information about all connected displays.

### Return Object (awaited):
An array of `Display` objects.

### Display
- `id` Number: A virtual display identifier.
- `resolution` Object: Display resolution information.
    - `width` Number: Display width.
    - `height` Number: Display height.
- `dpi` Number: DPI (Dots Per Inch) value.
- `bpp` Number: BPP (Bits Per Pixel) value (also known as the color depth).
- `refreshRate` Number: Refresh rate in hertz (Hz).


```js
let displays = await Neutralino.computer.getDisplays();
for(let display of displays) {
    console.log(display);
}
```

## computer.getMousePosition()
Returns the current mouse cursor position.

### Return Object (awaited):
- `x` Number: Distance from the left edge of the screen in pixels.
- `y` Number: Distance from the top edge of the screen in pixels.


```js
let pos = await Neutralino.computer.getMousePosition();
console.log(`Pos: ${pos.x}, ${pos.y}`);
```
