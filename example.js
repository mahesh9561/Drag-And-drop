// Regular function
function regularFunction() {
    console.log(this); // `this` is dynamic
  }
  
  // Arrow function
  const arrowFunction = () => {
    console.log(this); // `this` is inherited from the enclosing scope
  };
  