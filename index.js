import inquirer from "inquirer";
import { cashWith, cashDep } from "./operations.js";
const accBalance = 50000;
let greetMsg = "Thank You For Using Our ATM.";
console.log(`Welcome John, enter ATM PIN.`);
let idPass = await inquirer.prompt({
    name: "pin",
    type: "password",
    message: "Enter you PIN"
});
if (idPass.pin === "1234") {
    console.log(`Greetings John!, select one of the operations.`);
    let atmOps = await inquirer.prompt({
        name: "selectOps",
        type: "rawlist",
        choices: ["Cash Withdrawal", "Cash Deposit", "Balance Inquiry", "Exit"]
    });
    if (atmOps.selectOps === "Cash Withdrawal") {
        let cashOps = await inquirer.prompt({
            name: "cashW",
            type: "list",
            message: "Select Cash Withdrawal Amount",
            choices: ["1,000", "3,000", "5,000", "10,000"]
        });
        let currentBal = cashWith(accBalance, cashOps.cashW);
        console.log(`Remaining Balance is ${currentBal}\n${greetMsg}`);
    }
    else if (atmOps.selectOps === "Cash Deposit") {
        let cashOps = await inquirer.prompt({
            name: "cashD",
            type: "list",
            message: "Select Cash Deposit Amount",
            choices: ["1,000", "3,000", "5,000", "10,000"]
        });
        let currentBal = cashDep(accBalance, cashOps.cashD);
        console.log(`Remaining Balance is ${currentBal}\n${greetMsg}`);
    }
    else if (atmOps.selectOps === "Balance Inquiry") {
        console.log(`Current Balance is ${accBalance}\n${greetMsg}`);
    }
    else {
        console.log(greetMsg);
    }
    ;
}
else {
    console.log(`Wrong Pin`);
}
;
