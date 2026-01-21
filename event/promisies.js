// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Asunc task is comleted");
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Asunc task is comleted");
//   }, 1000);
// });

// promiseTwo.then(function () {
//   console.log("promise consumed");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({ username: "Gaurav", email: "gauravnegi" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Gaurav", email: "gauravnegi" });
//     } else {
//       reject("Error: Something went wrong");
//     }
//   });
// });

// promiseFour
//   .then(function (user) {
//     console.log(user);
//     return user.username;
//   })
//   .then(function (username) {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// const promiseFive = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         let error = true;
//         if(!error){
//             resolve({username:"Gaurav", email:"gauravnegi"})
//         }else{
//             reject("Error: Something went wrong")
//         }
//     }, 1000)
// })

// async function consumePromise(){
//     try {
//         const response = await promiseFive
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// consumePromise()

// async function getAllUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

