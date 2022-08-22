const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = `Користувач ${loginToFind} не знайден`;
// Перший  приклад
// for (let i = 0; i < logins.length; i +=1) {
//     const login = logins[i];

//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайден`
//         break;
//     }
// }
// console.log(message)

// Другий приклад
// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Користувач ${loginToFind} знайден`
//         break;
//     }
// }
// console.log(message)

// Третій приклад
const message = logins.includes(loginToFind) ? `Користувач ${loginToFind} знайден` : `Користувач ${loginToFind} не знайден`;

console.log(message);