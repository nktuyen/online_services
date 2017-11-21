var method = User.prototype;

const GENDER_MALE = 0;
const GENDER_FEMALE = 1;
const GENDER_UNKNOWN = 2;

function User(name){
    this._name = name;
    this._pwd = '';
    this._gender = GENDER_UNKNOWN;
    this._birthd = 0;
    this._birthm = 0;
    this._birthy = 0;
}

method.name = function(){
    return this._name;
}
method.setName = function(name){
    this._name = name;
}

method.password = function(){
    return this._pwd;
}
method.setPassword= function(pwd){
    this._pwd = pwd;
}

method.setGender = function(g){
    this._gender = g;
}
method.gender = function(){
    return this._gender;
}

method.birthday = function(){
    return new Date(this._birthy, this._birthm, this._birthd);
}
method.setBirthday = function(y,m,d){
    this._birthd = d;
    this._birthm = m;
    this._birthy = y;
}

method.age = function(){
    var now = new Date(Date.now());
    return now.getFullYear()-this._birthy;
}

module.exports = User;