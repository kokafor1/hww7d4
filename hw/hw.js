// Exercise 1
/*
Banking System

Create an Account class with the properties accountNumber, currentBalance, and owner. The Account should have methods to deposit and withdraw. The 
deposit method should add that amount to the currentBalance. The withdraw method should first check if there is enough to withdraw before withdrawing

Implement child classes CheckingAccount and SavingsAccount, each inheriting from the Account class. 

The CheckingAccount will also have an overdraftLimit property. Override the withdraw method to 
first check if there is enough (+ overdraftLimit) before withdrawing.

The SavingsAccount will also have an interestRate. Add a method addInterest that will increase the currentBalance by that interest rate

*/


class Account {
    constructor(accountNumber, currentBalance, owner) {
        this.accountNumber = accountNumber;
        this.currentBalance = currentBalance;
        this.owner = owner;
    }

    deposit(amount) {
        this.currentBalance += amount;
    }

    withdraw(amount) {
        if (this.currentBalance >= amount) {
            this.currentBalance -= amount;
            console.log("Withdrawal successful.");
        } else {
            console.log("Insufficient funds.");
        }
    }
}

class CheckingAccount extends Account {
    constructor(accountNumber, currentBalance, owner, overdraftLimit) {
        super(accountNumber, currentBalance, owner);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (this.currentBalance + this.overdraftLimit >= amount) {
            this.currentBalance -= amount;
            console.log("Withdrawal successful.");
        } else {
            console.log("Insufficient funds.");
        }
    }
}

class SavingsAccount extends Account {
    constructor(accountNumber, currentBalance, owner, interestRate) {
        super(accountNumber, currentBalance, owner);
        this.interestRate = interestRate;
    }

    addInterest() {
        const interest = this.currentBalance * (this.interestRate / 100);
        this.currentBalance += interest;
        console.log("Interest added.");
    }
}

const checkingAccount = new CheckingAccount('123456', 1000, 'John Doe', 500);
const savingsAccount = new SavingsAccount('654321', 5000, 'Jane Smith', 2);

checkingAccount.deposit(500);
checkingAccount.withdraw(1400);
checkingAccount.withdraw(200);  

savingsAccount.deposit(1000);
savingsAccount.withdraw(7000);
savingsAccount.addInterest();


// Exercise 2 - Promises 
// Using the below getMovieInfo function, which is a Promised-base function, write an asynchronous function (.then().catch() or async/await)
// called printMovieInfo that will take in a movie title and then either displays the movie information or logs an error with a console.warn().


// function getMovieInfo(movieName){
//     return new Promise((resolve, reject) => {
//         if (movieName.length > 5){
//             let movie = {
//                 id: 123,
//                 title: movieName,
//                 director: 'Christopher Spielberg',
//                 runtime: 157,
//                 description: 'Good vs Evil'
//             }
//             resolve(movie)
//         } else {
//             reject(`${movieName} cannot be accessed because it is too short.`)
//         }
//     })
// }

// function printMovieInfo(){};

async function printMovieInfo(movieTitle) {
    try {
        const movieInfo = await getMovieInfo(movieTitle);
        console.log("Movie information:");
        console.log("Title:", movieInfo.title);
        console.log("Director:", movieInfo.director);
        console.log("Runtime:", movieInfo.runtime);
        console.log("Description:", movieInfo.description);
    } catch (error) {
        console.warn("Error:", error);
    }
}

// Example 1
printMovieInfo('Indiana Jones and the Dark Knight')
// Output: Indiana Jones and the Dark Knight directed by Christopher Spielberg. A story of Good vs Evil that runs for 157 minutes.

// Example 2
printMovieInfo('ET')
// Output: *Warning* ET cannot be accessed because it it too short