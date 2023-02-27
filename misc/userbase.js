const User = require('./user')

class UserBase {

    constructor(users) {
        this.users = users;
    }

    count() {
        return this.users.length
    }

    getNames() {
        let names = this.users.map((user) => {
            return user.getName()
        })
        return names
    }

    getIntroductions() {
        let introductions = this.users.map((user) => {
            return user.getIntroduction()
        })
        return introductions
    }
}

let users_array = [
    new User('Cass'),
    new User('Josh'),
    new User('Ollie')
];

module.exports = UserBase;

let userBase = new UserBase(users_array)

console.log(userBase.count())
console.log(userBase.getNames())
console.log(userBase.getIntroductions())