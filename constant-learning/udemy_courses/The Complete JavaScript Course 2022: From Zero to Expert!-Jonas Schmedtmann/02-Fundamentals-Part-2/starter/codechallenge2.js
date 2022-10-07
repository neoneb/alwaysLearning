// 1.
const calcTip = function(bill) {
tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
return tip
};

console.log(calcTip(100));

// 2.
const bills = [125, 555, 44];

// // 3.
const tips = [
   calcTip(bills[0]),
   calcTip(bills[1]),
   calcTip(bills[2])
]

console.log(tips);

// 4.
 const total = [
   tips[0] + bills[0],
   tips[1] + bills[1], 
   tips[2] + bills[2]
]

console.log(total)
