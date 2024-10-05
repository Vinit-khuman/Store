const pool = require("../utils/database");

module.exports = class Users {
    constructor(id, userName, password) {
        this.id = id;
        this.userName = userName;
        this.password = password;
    }

    insertUser() {
        // Check for undefined values and default them to null if necessary
        const userName = this.userName || null;
        const password = this.password || null;

        // Log the values to debug if needed
        console.log('Inserting user:', userName, password);

        // Insert the user into the database
        return pool.execute(
            "INSERT INTO users(userName, password) VALUES(?, ?)",
            [userName, password]
        );
    }

    static fetchUserByUserName(userName){
        return pool.execute(
            "select * from users where userName=?",
            [userName]
        )
    }
};
