---
title: Neutralino.custom
---

Neutralinojs offers the extensions API to write custom backend code with any programming language,
but extensions come with the following drawbacks that affect apps in several scenarios:

- Extensions use a shared WebSocket for communication, so using direct C++ references
(i.e., the window handler) is impossible within extensions.
- The developer is responsible for packaging their extension binaries.
- A C++-based extension is not fast as native C++-based code due to the WebSockets-based IPC.

Alternatively, a developer can download the framework C++ code, modify it, and re-compile it. But,
the developer may face issues while synching upstream code modifications. So, Neutralinojs offers a separate namespace, a generic JavaScript function template, pre-developed helper functions for handling JavaScript-to-C++ parameter mapping (i.e., helpers::hasField(json, '<fieldname>')), and a developer guide to add custom APIs to the Neutralinojs framework without updating the framework core.

## Inbuilt Helper Functions
  Sample custom method.
  The client library will automatically add this method to the Neutralino global object.

  Usage examples:

  ```js
  let sum;
  sum = await Neutralino.custom.add(10, 10); // 20
  sum = await Neutralino.custom.add(1, 1, { addExtraFive: true, addExtraTen: true }); // 17


 json add(const json &input) {
     json output
     // Validate
     if(!helpers::hasRequiredFields(input, {"arg0", "arg1"})) {
         output["error"] = errors::makeMissingArgErrorPayload();
         return output;
     
     // Extract input parameters
     int a, b, sum = 0;
     a = input["arg0"].get<int>();
     b = input["arg1"].get<int>();
     // Process
     sum = a + b
     // Handle options
     if(helpers::hasField(input, "addExtraFive")) {
         if(input["addExtraFive"].get<bool>()) {
             sum += 5;
         }
     }
     if(helpers::hasField(input, "addExtraTen")) {
         if(input["addExtraTen"].get<bool>()) {
             sum += 10;
         }
     }

    // Return the result
    output["returnValue"] = sum;

    // Mark the method call as a successful one
    output["success"] = true;

    return output;
}

} namespace controllers
} namespace custom
```

## custom.getMethods()
Returns all custom methods added by the app developer.

### Return Array (awaited):
A string array of all custom method identifiers.

```js
let methods = await Neutralino.custom.getMethods();
console.log(methods);
```


## custom.add(num1, num2, options)

:::info
This is a sample method and official Neutralinojs framework builds don't include this method by default.
So, you have to download the Neutralinojs framework source code and uncomment the `add` method in the
[`custom`](https://github.com/neutralinojs/neutralinojs/tree/main/api/custom) namespace and
[`router.cpp`](https://github.com/neutralinojs/neutralinojs/blob/db457c717d789a040e70f0b8de9ddd412c8ec103/server/router.cpp#L122).
:::

This method returns the sum of two numbers for demonstration purposes of custom methods.

### Parameters
- `num1` Number: The first number for the summation process.
- `num2` Number: The second number for the summation process.

### Options
- `addExtraFive` Boolean: Adds extra five to the numerical result.
- `addExtraTen` Boolean: Adds extra ten to the numerical result.

### Return Number (awaited):
The sum of input numerical parameters with extra value additions based on options.

```js
let sum;
sum = await Neutralino.custom.add(10, 10); // 20
sum = await Neutralino.custom.add(1, 1, { addExtraFive: true, addExtraTen: true }); // 17
```

Check the `add` method implementation and learn how to capture, validate, and process parameters in C++.
For compiling your Neutralinojs fork, you can use the existing
[GitHub Actions workflows](https://github.com/neutralinojs/neutralinojs/tree/main/.github/workflows).
