// Create a wrapper around a JS Map so you can lookup keys in a case-insensitive way. All of the other methods in the class should work as they already do. (Note: keys() should show the actual keys used during the set.
//
// Map docs:
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
//
//
// const m = new InsensitiveMap();
//
// m.set('OSITO', "bonito");
//
// m.get("OSITO")
// // => "bonito"
//
// m.get('osito')
// // => "bonito"
//
// m.get('Osito')
// // => "bonito"


class InsensitiveMap {
  set(key, value) {

  }
  get(key) {

  }
}


const m = new InsensitiveMap();

m.set('OSITO', "bonito");
console.log('m.get("OSITO") => ', m.get("OSITO"));

module.exports = m;
