const obj1 = {
    prop1: 'value1',
  };
  
  // Object 2
  const obj2 = {
    prop2: 'value2',
  };
  
  // Combining objects using spread syntax
  const combinedObject = {
    ...obj1,   // Spread properties of obj1
    ...obj2,   // Spread properties of obj2
  };
  
  console.log(combinedObject);