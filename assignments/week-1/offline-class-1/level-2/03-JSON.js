function jsonMethods(jsonString) {
  console.log("Original JSON String:", jsonString);

  // Parsing JSON string to JavaScript object
  let parsedObject = JSON.parse(jsonString);
  console.log("After JSON.parse():", parsedObject);

  // Stringifying JavaScript object to JSON string
  let jsonStringified = JSON.stringify(parsedObject);
  console.log("After JSON.stringify():", jsonStringified);
}

// Example Usage for JSON Methods
const sampleJSONString =
  '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

jsonMethods(sampleJSONString);


const users = {
  name:"Shashi",
  age:22,
}
const one = (users.name);
console.log(typeof(one));
console.log(users.name);
const two = (users["name"]);
console.log(typeof(two));
console.log(users["name"]);


const jsonhai = '{"name":"Shashi","age":"22"}'
const objaagaya = JSON.parse(jsonhai);
const one3 = (objaagaya.name);
console.log(typeof(one3));
console.log(objaagaya.name);
const two3 = (objaagaya["name"]);
console.log(typeof(two3));
console.log(objaagaya["name"]);