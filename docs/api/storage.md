# storage
> The `storage` module allows you to store or retrieve **JSON based data** on or from the system. 

## storage.putData(object data, function success(), function error())
It allows you to store JSON based data onto the system disk. <br/>
### Parameters
#### *object data*
a Javascript object, that will be stored as JSON on the disk. <br/>
#### *function success()* 
a callback function, it is executed when the data is successfully stored on the disk. 
#### *function error()* - 
a callback function, it is executed if any kind error occurs while storing the data. 
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
    () => {
    console.log('Data saved to storage/test.json');

    },
// executes if an error occurs

    () => {
    console.log('An error occured while saving the Data');
    
    }
);
```

## storage.getData(string key,function success(content),function error())
It is used to retrieve the JSON app data already been stored onto the system. <br/>

### Parameters
#### *string key*
a key to search for JSON data
#### *function success(content)*
a callback function, which is executed when the data is successfully retrieved. The data is passed as argument to the function.
#### *function error()*
a callback function, which is executed when an error occurs. 

<br/>

```javascript 
// The stored data is being retrieved from the JSON based data store. 
Neutralino.storage.getData('test',
// executes when data is successfully retrieved.
    (content) => {
    console.log('The data you requested for \n');

    // the data that has been retrieved.
    console.log(content);

    },
// executes if an error occurs
    () => {
    console.log('An error occured while retrieving the data.');

    }
);
```
