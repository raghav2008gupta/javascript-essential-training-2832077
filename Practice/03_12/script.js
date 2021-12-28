/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Country from "./Country.js";
import State from "./State.js";

function stringify(object) {
    return JSON.parse(JSON.stringify(object));
}

const arkansas = new State("Arkansas", "Little Rock", ["Benton", "Washington"]);
const florida = new State("Florida", "Tallahassee", ["Alachua", "Miami Dade", "Broward"]);
const usa = new Country("USA", "Washington DC", arkansas);

console.log("Country", stringify(usa));
console.log("State", stringify(arkansas));

console.log(usa.removeState("Arkansas"));
console.log("Country", usa);

const states = [arkansas, florida];
usa.addStates(states);
console.log("Country", usa);

florida.removeCounty("Miami Dade");
console.log("State", florida);
console.log("Country", usa);
