function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  let name = "Pankaj";
  callback(name); // calling the passed function
}

processUser(greet); // "Hello Pankaj"