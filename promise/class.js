class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}
const data = new User('mayank','mks@smail.com','12345')
console.log(data);

console.log(data.encryptPassword());
console.log(data.changeUsername());
 
