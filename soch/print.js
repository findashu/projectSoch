const print = require("print");
let output = print({
  foo: "bar",
  baz: "quux",
  list: [1, 2, 3, 4, "five"]
});
console.log(output);

print.out(obj);

print(input, {
  ampedSymbols: true,
  escapeChars: /(?!\x20)\s|\\/g,
  invokeGetters: false,
  maxArrayLength: 100,
  showAll: false,
  showArrayIndices: false,
  showArrayLength: false,
  sortProps: true
});
