

class calculate{
    numberOne : number
    numberTwo: number

    constructor(numberOne: number, numberTwo:number){
        this.numberOne = numberOne
        this.numberTwo = numberTwo
    }

    function multiply(): number{
        return this.numberOne * this.numberTwo
    }

    function division(): number{
        return this.numberOne / this.numberTwo
    }

    function addition(){
        return this.numberOne + this.numberTwo
    }

    function subtraction(){
        return Math.abs(this.numberOne - this.numberTwo)
    }
}
