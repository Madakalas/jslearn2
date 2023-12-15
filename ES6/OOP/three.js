class Account{
    acc_Amount=0
    deposit_Amount(amount){
        this.acc_Amount = this.acc_Amount + amount
    }
    get_Bal(){
        return this.acc_Amount;
    }
}

let a= new Account()
a.deposit_Amount(500)
a.deposit_Amount(500)
a.deposit_Amount(500)
a.deposit_Amount(500)

let bal = a.get_Bal()

console.log(bal)