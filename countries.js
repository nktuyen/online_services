require('./country')

var countries = Countries.prototype;
function Countries() {
    this._names = {};
    this._ids = {};
}

countries.createCountry = function(i,n,t) {
    country = new Country({
        id: i,
        name: n,
        title: t
    })
    this._ids[country.id()] = country;
    this._names[country.name()] = country;
}
countries.size = function() {
    var count = 0;
    for(c in this._ids) {
        ++count;
    }

    return count;
}

countries.createCountryList = function() {
    this.createCountry(size(this._ids), 'Vietnam', 'Việt Nam');
    this.createCountry(size(this._ids), 'Korea', 'Hàn Quốc');
    this.createCountry(size(this._ids), 'China', 'Trung Quốc');
    this.createCountry(size(this._ids), 'Rusia', 'Nga');
    this.createCountry(size(this._ids), 'America', 'Mỹ');
}

countries.get = function(id_or_name ){
    if(typeof id_or_name === 'number') {
        return this._ids[id_or_name];
    }
    else if(typeof id_or_name === 'string') {
        return this._names[id_or_name];
    }
    else {
        throw new Error("Invalid key.");
    }
}