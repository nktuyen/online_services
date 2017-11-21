var methods = Regions.prototype;

const events = require('events');
const EventEmitter = new events.EventEmitter();
const Region = require('./region');
const HashMap = require('hashmap');
var _ids = null;
var _regions = null;
var _names = null;

function Regions() {
    _regions = new Array();
    _ids = new HashMap();
    _names = new HashMap();
}

methods.count = function() {
    if('undefined' == _ids) {
        return 0;
    }

    return _ids.count();
}

methods.addRegion = function(id, name, title)  {
    var region = new Region(id, name, title);
    _ids.set(region.id(), region);
    _names.set(region.name(), region);
    _regions.push(region);
}

methods.find = function(id_or_name) {
    if(typeof id_or_name === 'number') {
        return _ids.get(id_or_name);
    }
    else if(typeof id_or_name === 'string') {
        return _names.get(id_or_name);
    }
}

methods.getAt = function(index) {
    if(typeof index !== 'number') {
        return null;
    }

    return _regions[index];
}

methods.parseGeoData = function(path, oncomplete) {
    const readline = require('readline');
    const fs = require('fs');
    var reader = readline.createInterface({
        input:fs.createReadStream(path)
    });
    line_num = 0;
    var region_seperator = -1;
    var region_id = 0;
    var region_name = '';
    var region_title = '';
    var region = null;
    reader.on('line', function(line){
        if(line_num > 0) {
            line.trim();
            region_seperator = line.indexOf(' ');
            if(-1 === region_seperator){
                region_seperator = line.indexOf('\t');
            }
            region_id = line.substr(0,region_seperator);
            region_name = line.substr(region_seperator+1);
            region_name.trim();
            region_title = region_name;
            
            methods.addRegion(parseInt(region_id), region_name, region_title);
        }
        ++line_num;
    });

    if(oncomplete) {
        reader.on('close', oncomplete);
    }
}

module.exports = Regions;