class Thermostat {

    constructor() {
        this.temperature = 20
        this.powerSavingMode = true
    }

    tempUp () {
        if(this.powerSavingMode === true && this.temperature < 25) {
            this.temperature++   
        }
        else if(this.powerSavingMode === false && this.temperature < 32) {
            this.temperature++
        }
        else {
            // throw "Maximum temperature reached at " + this.temperature
            return console.log("Maximum temperature reached at " + this.temperature)
        }
    }

    tempDown () {
        if(this.temperature > 10) {
        this.temperature--
    } else {
        return console.log("Cannot lower temperature below 10 degrees")
    }}

    getTemperature () {
        return this.temperature
    }

    setPowerSavingMode (boolean) {
        if(boolean === true) {
            this.powerSavingMode = true
        } else {
            this.powerSavingMode = false
        }
    }

    reset () {
        this.temperature = 20
    }

    queryEnergyUsage () {
        if(this.temperature < 18) {
            console.log("Low energy use")
        }
        else if(this.temperature <= 25) {
            console.log("Medium energy use")
        }
        else {
            console.log("High energy use")
        }
    }

}

module.exports = Thermostat;