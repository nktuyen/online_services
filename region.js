var methods = Region.prototype;

function Region(i, n, t) {
    this._id = i;
    this._name = n;
    this._title = t;
}

methods.id = function() {
    return this._id;
}

methods.name = function() {
    return this._name;
}

methods.title = function() {
    return this._title;
}

module.exports = Region;