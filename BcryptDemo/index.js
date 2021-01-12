const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(pw, salt);
    console.log(salt);
    console.log(hash);
}

const login = async(pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);
    if (result) {
        console.log("Logged you in! Successful match!")
    } else {
        console.log("Incorrect!")
    }
}

// hashPassword('monkey');

login('monkey', '$2b$12$.DDuK.D3fbnSUhH87xe2FuaQ4SkkdOuc.4ClUI7OFdc3CYBulwl.6')