// TODO: write your code here
/*import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));*/

export default class Validator {
    validateUsername(username) {
        const re1 = /[a-zA-Z-_\d]/; //Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9);
        const re2 = /\d{4,}/; // Не должно содержать подряд более трёх цифр
        const re3 = /^[\d_-]/; // Не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.
        const result = re1.test(username) && !re2.test(username) && !re3.test(username);        
        return result;
    }
}
