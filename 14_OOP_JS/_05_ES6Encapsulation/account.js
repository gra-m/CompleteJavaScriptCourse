"use strict";
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields

// Until recently there was only pretend encapsulation
// of js fields and methods. _denoted do not access directly.
// meaning 'Protected' this was an agreed convention.
// Now we have truly private fields and methods.
// Todo => make movements array of pairs datetime/movement amount.
class Account {
    #movements = [];
    #pin;
    locale = navigator.language;


    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        console.log(`Thanks for opening an account, ${owner}`)
    }

    deposit(amount) {
       this.#movements.push(amount);
       return this; // enables method chaining.
    }

    withdraw(amount) {
       this.deposit(-amount);
       return this;
    }

    printStatement() {
        for (let mov of this.#movements) {
            console.log(mov)
        }
        return this;
    }

    #approveLoan(amount) {
        return true;
    }

    #approvePin(pin) {
        return true;
    }

    #approveOtherId(otherID) {
        return true;
    }

    requestLoan(amount) {
        if(this.#approveLoan(amount)) {
            this.deposit(amount);
            console.log(`
            ${this.owner}, your loan was approved,
            ${amount}${this.currency} deposited.`)
        }
        return this;
    }

    changePin(pin) {
        if(this.#approvePin(pin)) {
            this.#pin = pin;
            console.log('Your pin has been changed.');
        } else{
            console.log('Problem, please try again');
        }
        return this;
    }

    getPin(otherID) { // even this should not be available..
        if(this.#approveOtherId(otherID)) {
            console.log(`Your pin is ${this.#pin}`)
        } else {
            console.log(`
            There is a problem with the alternate ID provided,
            your pin cannot be revealed at this time.
            Your account has been action limited, meaning that only
            2 movements not exceeding 80 Euro can be completed per
            day until further notice.
            An email and text with instant reactivation details has
            been sent to the account holder.`)
        }

        return this;
    }
}

const acc1 = new Account('Joany', 'EUR', 1111)

acc1.deposit(100);
acc1.withdraw(10);
acc1.printStatement();
acc1.requestLoan(100);
acc1.getPin('asdf');
acc1.changePin(2222);
acc1.getPin('asdf');

// by returning this on all API methods of this class they can now be
// chained:

acc1.deposit(1100).withdraw(300).printStatement()
    .requestLoan(1000).getPin('asdf')
    .changePin(1234)
    .getPin('asdf');


