# storage
> The `storage` module allows you to store or retrieve **JSON based data** on or from the system. 

## storage.putData(object data, function success(), function error())
Allows the ability to store JSON based data onto the system disk. <br/>
### Parameters
#### *object data*
A javascript object, that will be stored as a JSON object on the disk. <br/>
#### *function success()* 
A callback function, that is executed when the data is successfully stored on the disk. 
#### *function error()* - 
A callback function, that is executed if an error occurs while storing the data. 
<br/>
 
```javascript 
// Javascript Object to be stored as JSON
let data = { 
    bucket : 'test', 
    content : { 
            item : 10 
    } 
}
// stores the data into JSON based data store.           
Neutralino.storage.putData(data,

// executes on successful storage of data
    function () {
    console.log('Data saved to storage/test.json');

    },
// executes if an error occurs

    function () {
    console.log('An error occured while saving the Data');
    
    }
);
```

## storage.getData(string key,function success(content),function error())
Retrieve the JSON app data currently stored on the system. <br/>

### Parameters
#### *string key*
A key to search for JSON data
#### *function success(content)*
A callback function, that is executed when the data is successfully retrieved. The data is passed as an argument to the function.
#### *function error()*
A callback function, that is executed when an error occurs. 

<br/>

```javascript 
// The stored data is being retrieved from the JSON based data store. 
Neutralino.storage.getData('test',
// executes when data is successfully retrieved.
    function(content) {
    console.log('The data you requested for \n');

    // the data that has been retrieved.
    console.log(content);

    },
// executes if an error occurs
   function () {
    console.log('An error occured while retrieving the data.');

    }
);
```
