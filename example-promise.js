function addPromise(a,b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    }
    reject("Not two numbers");
  })
};

addPromise(8,0).then(function(x) {
  console.log('success', x);
},
function(e){
  console.log('error',e);
});
