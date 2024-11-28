---
title: Global Variables
toc_max_heading_level: 2
---

These JavaScript variables can be used anywhere because these variables are defined in the window scope.

## Predefined global variables

| Variable      | Description                                                   |
| --- | --- |
| `NL_OS`       | Operating system name: `Linux`, `Windows`, or `Darwin`        |
| `NL_ARCH`     | CPU architecture: `x64`, `arm`, `itanium`, `ia32`, or `unknown`        |
| `NL_APPID`    | Application identifier                                        |
| `NL_APPVERSION` | Application version                                         |
| `NL_PORT`     | Application port                                              |
| `NL_MODE`     | Mode of the application: `window`, `browser`, `cloud`, or `chrome`      |
| `NL_VERSION`  | Neutralinojs framework version                                   |
| `NL_CVERSION`  | Neutralinojs client version                                  |
| `NL_CWD`      | Current working directory                                     |
| `NL_PATH`     | Application path                                              |
| `NL_DATAPATH` | Application data path                                         |
| `NL_ARGS`     | Command-line arguments                                        |
| `NL_PID`      | Identifier of the current process                             |
| `NL_RESMODE`  | Source of application resources: `bundle` or `directory`      |
| `NL_EXTENABLED` | Returns `true` if extensions are enabled     |
| `NL_COMMIT` | Framework binary's release commit hash     |
| `NL_CCOMMIT` | Client librar's release commit hash     |
| `NL_CMETHODS` | Custom method identifiers (Returns the same output that [`custom.getMethods`](custom.md#customgetmethods) returns). |
| `NL_WSAVSTLOADED` | Returns `true` if the initial window state was loaded from the saved configuration |
| `NL_GINJECTED` | Returns `true` if global variables are injected |
| `NL_CINJECTED` | Returns `true` if the client library source is injected |

:::tip
You can use `NL_COMMIT` and `NL_CCOMMIT` values to identify the codebase snapshot if you use nightly releases.
:::


## Custom global variables

You can make custom global variables too via `neutralino.config.json`, as shown
below.

```json
"globalVariables": {
    "TEST": "Test Value"
}
```

The above custom global variable's value can be accessed with `NL_TEST`. You can set any data type for
custom global variables. Look at the following examples.

```json
"globalVariables": {
    "TEST_1": 1,
    "TEST_2": null,
    "TEST_3": 3.5,
    "TEST_4": [3, 5, 4, 5],
    "TEST_5": {
        "key": "value",
        "anotherKey": 100
    }
}
```

Avoid overriding predefined global variables.

