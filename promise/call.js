

//*************************use of call *********************

function newUsername (username){
    this.username = username ;
}

function companyuser(username , email , pasword) {
    newUsername.call(this , username);                 // here i use call on newuser refrance and this as a first paramiter to connect  

    this.email = email ;
    this.pasword = pasword ;
}

const mks = new companyuser('mayank','mks@gmail.com','123456');

console.log(mks);