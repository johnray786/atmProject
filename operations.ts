export function cashWith(balance:number, ops:string) {
    let opsNum = parseFloat(ops)*1000
    if (opsNum<=balance) {
        console.log(`Take Your ${ops}`);
        
        balance = balance - opsNum;
        return balance
    }
    else {
        console.log(`Low balance, deposit the cash`);
    }    
}
export function cashDep(balance:number, ops:string) {
    let opsNum = parseFloat(ops)*1000
        balance = balance + opsNum;
        return balance
    }

 