let Temperature = function (celcius,fahrenheit) {
    this.celcius = celcius;
    this.fahrenheit = fahrenheit;

    this.getCelcius = function () {
        return this.celcius;
    };
    this.getFahrenheit = function () {
        return this.fahrenheit;
    };
    this.setCelcius = function (celcius) {
        return this.celcius;
    };
    this.setFahrenheit = function (fahrenheit) {
        return this.fahrenheit;
    };

    this.cToF = function () {
        return 9/5*this.fahrenheit +32;
    };
    this.fToC = function () {
        return (5/9) * (this.fahrenheit-32);
    }
};