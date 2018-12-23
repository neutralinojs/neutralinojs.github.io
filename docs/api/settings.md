# Settings

> The `settings` module is used to get app settings.

## os.getSettings(function success(settingsData), function error())
Lists all available settings of the project.

### Parameters 
#### function success(settingsData)
A callback function, executed when the app settings are retrieved successfully. The settings are provided as an argument to the function.

```javascript
// A call to os.getSettings()
Neutralino.settings.getSettings(
  // executes on successfull retrieval of settings
  function (settingsData) {
    console.log(settingsData);
  },
  // executes when a error occurs
  function () {
    console.log('An error occured while trying to retrieve the settings.');
  }
);
```
