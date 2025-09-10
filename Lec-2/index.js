{
  // console output messages with different types
  console.log("Hello World!");
  console.warn("are you sure!!!");
  console.error("invalid reference!!!");
  console.table([10, 20, 30, 40]);

  // Variables example
  // var result; (Declaration ho jati hai, to undefined)
  var result = 100;
  console.log(result); // 100

  var box;
  console.log(box); // undefined

  {
    var first = "Hi";
  }
  console.log(first); // "Hi" (var has function/global scope)

  function sum() {
    var x = 10;
    // x scoped to function only
  }
  sum();
  // console.log(x); // Error: x is not defined, since x is block scoped in function

  // var vs let example
  var x = 10;
  let y = 20;
  var x = 30; // re-declare allowed for var
  // let y = 40; // Error: 'y' has already been declared
  y = 40; // reassignment allowed
  console.log(x, y); // 30 40

  // let keyword block scope example
  let a = 20;
  {
    let a = 50; // different 'a' in block scope
  }
  console.log(a); // 20

  // const example
  const c = 20;
  console.log(c);
  {
    const c = 30;
    console.log(c); // 30 (block scoped)
  }

  // case sensitive variables
  let X = 20;
  let x1 = 10;
  console.log(x, X, x1);
}
