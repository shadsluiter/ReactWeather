function add(a,b) {
  return a + b;
}

console.log(add(4,9));
console.log(add(1,10));

var addStatement = (a,b) => {
  return a + b;
};
console.log(addStatement(4,4));


var addExpression = (a,b) => a + b;
console.log(addExpression(1,2));
