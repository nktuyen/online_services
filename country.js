var method = Country.prototype;

function Country(id, name, title){
    console.log(typeof id);
    this._id = id;
    this._name - name;
    this._title = title;
}

method.id = function() {
    return this._id;
}

method.name = function() {
    return this._name;
}

method.title = function() {
    return this._title;
}

module.exports = Country;