"use strict";
const bankAccount = {
    money: 0,
    deposit(value, message) {
        this.money += value;
        if (message) {
            console.log(message);
        }
    },
};
bankAccount.deposit(20);
bankAccount.deposit(10, 'Deposit received');
console.log('[Exercice: 3.2]', `Account value: $${bankAccount.money}`);
