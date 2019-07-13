# Stringto-object

> Make nested javascript object from string representation.

## Installation

```
npm i @backendsuraj/stringto-object --save
```

## Usage

```javascript
const string2object = require('@backendsuraj/stringto-object');

string2object.getObject("users.details.phone", '91987***321')
// { users: { details: { phone: '91987***321' } } }

//using for loop
let elements = [{
    "user_phone": {
        "object_definition": {
            "string": "users.details.phone",
            "data": "91987***321"
        }
    },
    "user_address": {
        "object_definition": {
            "string": "users.details.address",
            "data": "Delhi, India"
        }
    },
}];

let objectHolder = {};

for (let [key, value] of Object.entries(elements[0])) {
    string2object.getObjectWithHolder(objectHolder, value.object_definition.string, value.object_definition.data);
}

console.log(objectHolder);
//{ users: { details: { phone: '91987***321', address: 'Delhi, India' } } }

```

### Methods

``` javascript
string2object.getObject("hello.world.reply", "HI")
string2object.getObjectWithHolder(ObjectHolder = {}, "hello.world.reply", "HI")
```

## License

MIT
