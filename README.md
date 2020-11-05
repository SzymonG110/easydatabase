# EasyDB


## Example

```js
const EasyDB = require("easy-json-database");
const db = new EasyDB("./some-database.json");

// Set data
db.set("Hello", "World");

// Has data
db.has("Hello"); // true

// Get data
db.get("Hello"); // World

// Delete data
db.delete("Hello");

db.get("Hello"); // undefined
db.has("Hello"); // false

db.set("age", 10);

// Add to data
db.add("age", 1); // 11

// Subtract from data
db.subtract("age", 9); // 2

db.set("array", [ "apple" ]);

// Push to data
db.push("array", "orange"); // [ "apple", "orange" ]

// Clear all data
db.clear();
```
