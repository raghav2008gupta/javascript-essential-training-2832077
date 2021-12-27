/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const country = {
    name: "USA",
    noOfStates: 50,
    state: [
        {
            name: "Arkansas",
            noOfCounties: 20,
            updateNoOfCounties: function (newNoOfCounties) {
                this.noOfCounties = newNoOfCounties;
            },
            city: {
                name: "Fayetteville"
            }
        },
        {
            name: "California",
            noOfCounties: 20,
            city: {
                name: "San Francisco"
            }
        },
        {
            name: "Florida",
            noOfCounties: 20,
            city: {
                name: "Orlando"
            }
        }
    ]
};

console.log("This is %s city.", country.state[0].city.name);
console.log("%s has %d counties.", country.state[0].name, country.state[0].noOfCounties);