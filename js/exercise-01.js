// // 1- Зробити змінні
//     const minSalary = 500;
//     const maxSalary = 5000;
//     const employees = 10;
//     let totalSelary = 0;

// // 2 Перебрати працівників у циклі
//     for (let i = 1; i <= employees; i += 1) {
//         const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//         console.log( `ЗП працівника ${i} = ${salary}`);
//         totalSelary += salary;
//     }
//     console.log (`totalSelary = ${totalSelary}`);
// // 3 Згенервати випадкову зарплау

// // 4 Додати до загальної

const min = 6;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {
    if (i % 2 !== 0) {
        console.log('Не парне: ', i);
        continue;
    }
    console.log('Парне: ', i);
    total += i;
}
console.log('total: ', total)
// фор від min до max із кроком в 1 
