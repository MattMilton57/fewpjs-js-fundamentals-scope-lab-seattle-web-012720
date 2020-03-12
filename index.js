let animal = "dog"

function myAnimal() {
  return animal
}

function yourAnimal() {
  let animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  const two = 2
  return n + two

  // Feel free to move things around!
 
}


// 1) Fix the Scope myAnimal() returns my animal:
// ReferenceError: animal is not defined
//  at Window.myAnimal (file://index.html:6:3)
//  at Context.<anonymous> (test/index-test.js:4:21)

// 2) Fix the Scope yourAnimal() returns your animal:
// ReferenceError: animal is not defined
//  at Window.yourAnimal (file://index.html:13:3)
//  at Context.<anonymous> (test/index-test.js:10:21)

// 3) Fix the Scope add2(n) adds two to n:
// ReferenceError: two is not defined
//  at Window.add2 (file://index.html:17:14)
//  at Context.<anonymous> (test/index-test.js:21:21)