// introduction

// Node.js ->   JavaScript Runtime Enviroment it is used for server side programming

//* Node.js is not a language, library or framework

//! node_modules :- The node_modules folder contains every installed dependency for your project.

//! packge-lock.json :- it records the exact version of ervery installed dependency, including its sub-dependencies and their versions

//! package.json :-  The package.json file contains descriptive and functional metadata about a project, such as a name, version and dependencies

//?  Node REPL - read, evaluate, print, loop

//* Process :- This object information about, and control over, the current Node.js process,

//* Process.argv :- return an array countaning the command-line arguments passed when the Node.js process was launched.
console.log(process.argv);

let args = process.argv;
for (let i = 2; i < args.length; i++) {
  console.log("hello ", args[i]);
}
