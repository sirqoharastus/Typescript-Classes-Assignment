var calculate = /** @class */ (function () {
    function calculate(numberOne, numberTwo) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }
    return calculate;
}());
function multiply() {
    return this.numberOne * this.numberTwo;
}
function division() {
    return this.numberOne / this.numberTwo;
}
function addition() {
    return this.numberOne + this.numberTwo;
}
function subtraction() {
    return Math.abs(this.numberOne - this.numberTwo);
}
