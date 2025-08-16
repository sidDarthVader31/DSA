/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let hold = -Infinity; // max profit if holding stock
    let cash = 0;          // max profit if not holding stock

for (let price of prices) {
    let prevCash = cash;
    cash = Math.max(cash, hold + price); // sell today
    hold = Math.max(hold, prevCash - price); // buy today
}

return cash;
};
