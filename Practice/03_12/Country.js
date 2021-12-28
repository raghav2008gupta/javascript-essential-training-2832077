import State from "./State.js";

const Country = class {
    constructor(
        name,
        capital,
        states
    ) {
        this.name = name;
        this.capital = capital;
        this.state = [];
        if (states != null) this.addStates(states);
        this.noOfStates = this.state.length;
    }
    changeName(newName) {
        this.name = newName;
    }
    changeCapital(newCapital) {
        this.capital = newCapital;
    }
    updateNoOfStates() {
        this.noOfStates = this.state.length;
    }
    addStates(newStates) {
        if (newStates instanceof Array) {
            newStates.forEach(state => this.addState(state));
        }
        else this.addState(newStates);
        this.noOfStates = this.state.length;
    }
    addState(newState) {
        if (this.state.map(state => state.name).indexOf(newState.name) <= -1) {
            let state = new State(newState.name, newState.capital, newState.counties);
            this.state.push(state);
        }
    }
    removeState(stateName) {
        var indexOfState = this.state.map(state => state.name).indexOf(stateName);
        if (indexOfState >= 0) {
            this.state.splice(indexOfState, 1)
            this.noOfStates = this.state.length;
            return stateName + " is removed from the list of states of " + this.name;
        }
        return stateName + " not found in the list of states of " + this.name;
    }
}

export default Country;