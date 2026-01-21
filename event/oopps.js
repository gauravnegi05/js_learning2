const user ={
    usernme : "Gaurav",
    email : "gauravnegi",
    signedIn : true,

    getUserDetails : function(){
        // console.log("got user details")
        console.log(`Username: ${this.usernme}`)
    }
}

console.log(user.usernme)
// console.log(user.getUserDetails())
