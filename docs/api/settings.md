# Settings

> The `settings` module is used to get app settings.

## os.getSettings(function success(settingsData), function error())
It lets you to get the list of the available settings.

### Parameters 
#### function success(settingsData)
a callback function, executed when the app settings are retrieved successfully. The settings are provided as an argument to the function.

```javascript
// A call to os.getSettings()
Neutralino.os.getSettings(
  // executes on successfull retrieval of settings
  (settingsData) => {
    console.log(settingsData);
  },
  // executes when a error occurs
  () => {
    console.log('An error occured while trying to retrieve the settings.');
  }
);
```
