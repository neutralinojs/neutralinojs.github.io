---
title: Global Variables
---

These JavaScript variables can be used anywhere because these variables are defined in the window scope.

## Predefined global variables

| Variable      | Description                                                   |
| --- | --- |
| `NL_OS`       | Operating system name: `Linux`, `Windows`, or `Darwin`        |
| `NL_APPID`    | Application identifier                                        |
| `NL_APPVERSION` | Application version                                         |
| `NL_PORT`     | Application port                                              |
| `NL_MODE`     | Mode of the application: `window`, `browser`, or `cloud`      |
| `NL_VERSION`  | Neutralinojs server version                                   |
| `NL_CVERSION`  | Neutralinojs client version                                  |
| `NL_CWD`      | Current working directory                                     |
| `NL_PATH`     | Application path                                              |
| `NL_ARGS`     | Command-line arguments                                        |
| `NL_PID`      | Identifier of the current process                             |


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

