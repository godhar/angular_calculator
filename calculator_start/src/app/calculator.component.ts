import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-calculator',
    templateUrl: './calculator.component.html',
    styleUrls: ['./calculator.component.css']

})
export class CalculatorComponent {


    private runningTotal = 0;
    private previousTotal = 0;
    private currentOperator = null;


    numberButtonClick(event) {

        this.runningTotal = Number('' + this.runningTotal + event.target.value);
    }


    changeSettings(operator) {
        this.previousTotal = this.runningTotal;
        this.runningTotal = 0;
        this.currentOperator = operator;
    }


    operativeButtonClick(event) {

        let operator = event.target.innerHTML;

        switch (operator) {
            case '=':
                this.makeCalculation();
                break;
            case '+':
                this.changeSettings(operator);
                break;
            case '-':
                this.changeSettings(operator);
                break;
            case '*':
                this.changeSettings(operator);
                break;
            case '/':
                this.changeSettings(operator);
                break;
            case '%':
                this.changeSettings(operator);
                break;
            case 'AC':
                this.runningTotal = 0;
                this.newTotal = true;
                break;
            case '.':
                this.runningTotal += ('' + '.');
                break;
        }
    }



    makeCalculation() {
        switch (this.currentOperator) {
            case '+':
                this.runningTotal += this.previousTotal;
                break;
            case '-':
                this.runningTotal = this.previousTotal - this.runningTotal;
                break;
            case '*':
                this.runningTotal *= this.previousTotal;
                break;
            case '/':
                this.runningTotal = this.previousTotal / this.runningTotal;
                break;
            case '%':
                this.runningTotal = ((this.previousTotal * this.runningTotal) / 100).toFixed(2);
                break;
        }
    }


}
