---
title: Global Variables
---

These JavaScript variables can be used anywhere because those variables are defined in the window scope.

## Predefined global variables

| Variable      | Description                                                   |
| --- | --- |
| `NL_OS`       | Operating system name: `Linux`, `Windows`, or `macOS`         |
| `NL_APPID`    | Application identifier                                        |
| `NL_PORT`     | Application port                                              |
| `NL_MODE`     | Mode of the application: `window`, `browser`, or `cloud`      |
| `NL_VERSION`  | Neutralinojs version                                          |
| `NL_CWD`      | Current working directory                                     |
| `NL_PATH`     | Application path                                              |
| `NL_ARGS`     | Command-line arguments                                        |


## Custom global variables

You make custom global variables too via `neutralino.config.json`, as shown
below.

```
....
"globalVariables": {
    "TEST": "Test Value"
},
....
```

The above custom global variable's value can be accessed with `NL_TEST`.

