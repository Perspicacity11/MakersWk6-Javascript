class User {

    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getIntroduction() {
        return `Hi, my name is ${this.name}`;
    }
};

module.exports = User;

//

const user1 = new User('Cass')
const user2 = new User('Steve')
console.log(user1.getName())
console.log(user2.getName())

//

