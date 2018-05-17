# Headline


```js
let folder = 'abc';
Neutralino.filesystem.createDirectory(folder, 
    function(data){
        if(typeof data.success != 'undefined'){
            alert(data.success);
        } 
        else {
            alert(data.error);
        }
    },
    function(){
        alert("Cannot connect Neutralino");
    }
);
```