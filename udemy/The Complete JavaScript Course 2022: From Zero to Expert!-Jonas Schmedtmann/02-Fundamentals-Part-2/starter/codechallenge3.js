// 1. 2.
const mark = {
   fullName: `Mark Miller`,
   weight: 78,
   height: 1.69,
   calcBMI: function() {
      this.BMI = this.weight / this.height ** 2;
      return this.BMI;
   }
};

const john = {
   fullName: `John Smith`,
   weight: 92,
   height: 1.95,
   calcBMI: function() {
      this.BMI = this.weight / this.height ** 2;
      return this.BMI;
   }
};
mark.calcBMI()
john.calcBMI()
console.log(mark.BMI);
console.log(john.BMI);

console.log(mark, john);

// 3.
console.log(mark.BMI < john.BMI ? `${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s (${mark.BMI})!` : `${mark.fullName}'s BMI (${mark.BMI}) is higher than ${john.fullName}'s (${john.BMI})!`)