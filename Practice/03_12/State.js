const State = class {
    constructor(
        name,
        capital,
        counties
    ) {
        this.name = name;
        this.capital = capital;
        this.counties = [];
        if (counties != null) this.addCounties(counties);
        this.noOfCounties = this.counties.length;
    }
    changeName(newName) {
        this.name = newName;
    }
    changeCapital(newCapital) {
        this.capital = newCapital;
    }
    updateNoOfCounties(newNoOfCounties) {
        this.noOfCounties = newNoOfCounties;
    }
    addCounties(newCounties) {
        if (newCounties instanceof Array) {
            newCounties.forEach(county => this.addCounty(county));
        }
        else this.addCounty(newCounties);
        this.noOfCounties = this.counties.length;
    }
    addCounty(newCounty) {
        if (this.counties.indexOf(newCounty.name) <= -1) {
            this.counties.push(newCounty);
        }
    }
    removeCounty(countyName) {
        var indexOfCounty = this.counties.indexOf(countyName);
        if (indexOfCounty >= 0) {
            this.counties.splice(indexOfCounty, 1)
            this.noOfCounties = this.counties.length;
            return countyName + " is removed from the list of counties of " + this.name;
        }
        return countyName + " not found in the list of counties of " + this.name;
    }
}

export default State;