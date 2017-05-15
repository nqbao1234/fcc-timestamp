// let express = require('express');
// let app = express();

// app.get('/', function (req, res) {
//     res.send('Hello World!')
// });

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!')
// });

var JSON_obj = { "name":"John", "age":30, "car":null };
var JS_obj = { name:"John", age:30, car:null };
console.log("JSON output");
console.log(JSON_obj);
console.log(JSON_obj.name);
console.log(JSON.stringify(JSON_obj));
console.log("Javascript output");
console.log(JS_obj);
console.log(JS_obj.name);
console.log(JSON.stringify(JS_obj));
