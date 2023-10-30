/* 
   Filename: SophisticatedCode.js
   Content: This code implements a simulation of a complex financial system
*/

class Account {
  constructor(name, balance = 0) {
    this.name = name;
    this.balance = balance;
  }
  
  deposit(amount) {
    this.balance += amount;
  }
  
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      throw new Error("Insufficient funds");
    }
  }
  
  transfer(amount, recipient) {
    if (this.balance >= amount) {
      this.balance -= amount;
      recipient.deposit(amount);
    } else {
      throw new Error("Insufficient funds");
    }
  }
}

class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }
  
  createAccount(name, initialBalance = 0) {
    const account = new Account(name, initialBalance);
    this.accounts.push(account);
    return account;
  }
  
  closeAccount(account) {
    const index = this.accounts.indexOf(account);
    if (index !== -1) {
      this.accounts.splice(index, 1);
    }
  }
  
  getTotalBalance() {
    return this.accounts.reduce((total, account) => total + account.balance, 0);
  }
}

const bank = new Bank("ACME Bank");

const account1 = bank.createAccount("John Doe", 1000);
const account2 = bank.createAccount("Jane Smith", 500);
const account3 = bank.createAccount("Alice Johnson", 2000);

account1.deposit(250);
account2.withdraw(100);
account2.transfer(200, account3);

console.log(`Total balance in bank: ${bank.getTotalBalance()}`);