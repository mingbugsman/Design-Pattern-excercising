function BuybyCreditCard(amount) {
    return amount*0.95;
}
function BuybyPalpay(amount) {
    return amount*0.97;
}
function BuybyTikTokCoin(amount) {
    return amount*1.1;
}
function BuybyVietTinBank(amount) {
    return amount *0.96;
}
const methodPay =  {
    creditcard : BuybyCreditCard,
    palpay : BuybyPalpay,
    tiktokcoin : BuybyTikTokCoin,
    viettinbank : BuybyVietTinBank,
}
class Payment {
    constructor(strategyBuy) {
        this.strategyBuy = strategyBuy == null ? null : strategyBuy;
    }
    setStrategyBuy(strategyBuy) {
        if (methodPay[this.strategyBuy]) {
            this.strategyBuy = strategyBuy
        }
        else throw new Error("hình thức thành toán không tồn tại");
    }
    getAmountByPayment(amount) {
        if (this.strategyBuy && methodPay[this.strategyBuy]) {
            return methodPay[this.strategyBuy](amount);
        }
        else return "hình thức thanh toán không tồn tại"
    }
}
export default Payment;