const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true, //공백 삭제
        unique : 1
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 5
    },
    firstname : {
        type : String,
        maxlength : 10
    },
    role : { //관리자, 일반 유저 구분
        type : Number,
        default : 0 //0은 일반 유저
    },
    image : String,
    token : {
        type : String
    },
    tokenExp : {
        type : Number
    }
})

const User = mongoose.model('User',userSchema)

module.exports = { User }