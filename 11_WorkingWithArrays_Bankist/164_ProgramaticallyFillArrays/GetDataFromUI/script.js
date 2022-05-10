// Data, we are pretending this comes from web API call so === objects

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};

const account2 = {
    owner: 'Jossica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Stoven Thomas Walliems',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Soroh Smythe', movements: [430, 1000, 700, 50, 90], interestRate: 1, pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const fillArrayExample = document.querySelector('.balance__value');

// region 163a
const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';
// IMPORTANT -> if you just sort MUTATES ORIGINAL! Slice makes a shallow copy.
    const movs = sort ? movements.slice().sort((a, b) => a - b): movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        console.log(`${i}: value: ${mov}`)
        const html = `
        <div class="movements__row">
            <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
            <div class="movements__value">${mov}</div>
        </div>`;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
// endregion

// region 151CODE CreateUserNames
const lowerCaseFirstLetter = user => user
    .toLowerCase()
    .split(' ')
    .map(name => name[0]).join('');


// Here we want the side effect of mutating the original array of user accounts accs
// without arrow this is  function(accs) {}
const createUserNames = accs => accs.forEach(acc => acc.userName = lowerCaseFirstLetter(acc.owner));


createUserNames(accounts);

console.log(accounts)


// endregion

// region 153aCODE calcDisplayBalance- reduce

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements
        .reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance} EUR`;
}

//endregion

// region 155 ChainingDemo
const euroToUsd = 1.13;

//PIPELINE // No checking
const totalDepositsUSD = account1.movements
    .filter(mov => mov > 0)
    .map(mov => mov * euroToUsd)
    .reduce((acc, mov) => acc + mov, 0);

//PIPELINE // each array accessed:
const totalDepositsUSDChecked = account1.movements
    .filter(function (mov, i, originalArray) {
        //  console.log(originalArray);
        return mov > 0;
    }).map((mov, i, depositsOnly) => {
        //   console.log(depositsOnly);
        return mov * euroToUsd;
    }).reduce((acc, mov, i, dollarValueDeposits) => {
        //    console.log(dollarValueDeposits);
        return acc + mov;
    }, 0)

// endregion

// region 155 calcDisplaySummary
const calcDisplaySummary = function (account) {
    const incomes = account.movements.filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${incomes}€`

    const out = account.movements.filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`

    // interest is only paid out if interest amount is greater than 1
    const interest = account.movements.filter(deposit => deposit > 0)
        .map(int => int * (account.interestRate / 100))
        .filter((int, i, arr) => {
            console.log('Up to now', arr);
            return int >= 1;
        })
        .reduce((acc, int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;

}


// endregion

const updateUI = function (currentAccount) {
    // Display movements
    displayMovements(currentAccount.movements);

    // Display balance
    calcDisplayBalance(currentAccount);

    // Display summary
    calcDisplaySummary(currentAccount);
}

//region 159

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAccount = accounts.find(function (acc) {
        return acc.userName === inputTransferTo.value
    });

    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 && currentAccount.balance >= amount && receiverAccount && receiverAccount.userName !== currentAccount.userName) {
        console.log('transfer valid')
        // Doing transfer
        currentAccount.movements.push(-amount);
        receiverAccount.movements.push(amount);
        updateUI(currentAccount);
    }

});


//endregion

// region 156 login

// Event Handlers


let currentAccount;


btnLogin.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('until html default behaviour for button in a form element is switched off, page' + ' will instantly refresh following event, so pass function an event param.');
    console.log('Current input value is: ', inputLoginUsername.value);

    /*currentAccount = accounts.find(function(account,index,array) {
        return account.userName === inputLoginUsername.value;
    })*/
    currentAccount = accounts
        .find(account => account.userName === inputLoginUsername.value)

    console.log(currentAccount);

    // Current account TRUTHY?.pin ...
    if (currentAccount?.pin === Number(inputLoginPin.value)) {

        // Display UI and welcome message.
        labelWelcome.textContent = `Welcome Back ${currentAccount.owner.split(' ')[0]}`;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur(); // loses its focus
        containerApp.style.opacity = 100;
        updateUI(currentAccount);

    }

});


// endregion

// region 160 CloseAccount FindIndex

/*function findIndexByUserName(userName){
    return accounts.findIndex(function(account) {
        return account.userName === userName;
    })
}*/

/*
function findIndexByUserName(userName) {
    return accounts.findIndex(account => account.userName === userName);}
*/

//const findIndexByUserName = userName => accounts.findIndex(account => account.userName ===
// userName);

btnClose.addEventListener('click', e => {
    e.preventDefault();

    if (inputCloseUsername.value === currentAccount.userName && Number(inputClosePin.value) === currentAccount.pin) {
        //const indexForDeletion = findIndexByUserName(inputCloseUsername.value);
        const indexForDeletion = accounts.findIndex(account => account.userName === currentAccount.userName);
        console.log('we could now delete this account', currentAccount, 'Index for deletion: ', indexForDeletion);
        accounts.splice(indexForDeletion, 1);

        // Hide UI
        containerApp.style.opacity = '0';
        labelWelcome.textContent = 'Log in to get started';
    }
});

// endregion

// region 161a Apply/ApproveLoan
//EVENTLISTENER:
btnLoan.addEventListener('click', e => {
    e.preventDefault();
    const loanRequest = inputLoanAmount.value;

    if (loanRequest > 0 && currentAccount.movements.some(mov => mov >= loanRequest * 0.1)) {
        console.log('loan ', loanRequest, 'accepted');
        currentAccount.movements.push(Number(loanRequest));
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
})
// endregion



// region 163a Sorting
let sorted = false;
btnSort.addEventListener('click', e =>{
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});


// endregion



// region GET DATA FROM UI NODELIST == array like structure from .movements__value
fillArrayExample.addEventListener('click', e => {
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),
        (el => Number(el.textContent.replace('€', ''))
        ));


    /* This mapping can be moved to second argument of Array.from
    console.log(movementsUI.map(el => Number(el.textContent.replace('€', ''))));*/

    console.log('Movements from UI', movementsUI);

    // Spread also creates an array but you have to do mapping separately:

    const movementsUI2 = [...document.querySelectorAll('.movements__value')];


})

// endregion

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([['USD', 'United States dollar'], ['EUR', 'Euro'], ['GBP', 'Pound sterling'],]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
