// primitive

// 7 types: string, number, boolearn, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 321123456654n
// console.log(bigNumber);



// reference DataType (Non primitive)
//  array, Objects , functions

const heros = ['shaktiman','naagraj','doga'];
let myobj = {
    name: "hitesh",
    age: 2,
}

const myfunction = function(){
    console.log("hello word");

}
// console.log(typeof scoreValue);
    // *****************************************************    //
    // stack (primitive), haep (non-primitive)
    let myyoutubname = "hitesh123"

    let anothername = myyoutubname
    anothername = "chaicode"
    // console.log(myyoutubname);
    // console.log(anothername);

    let userOne = {
        email:"hitesh@gmail.com",
         upiId:"hitesh@123"
    }
    let userTwo = userOne
    let userThree = userOne
    
    userTwo.email = "hitesh12@gmail.com"
    userThree.upiId = "hitesh12@g"

    console.log(userOne.email);
    console.log(userTwo.email);
    console.log(userThree.upiId);
    