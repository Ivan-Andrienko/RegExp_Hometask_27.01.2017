/**
 * Created by Админ on 29.01.2017.
 */
    "use strict";
let address = require('./addresses');
let result = [];

function re(arr){
    let resultArr = [];

    let Obj = function(street, house, flat){
        this.street=street;
        this.house=house;
        this.flat=flat;
        this.toString = function () {
            return 'street: ' + this.street + ', ' + 'house: '+this.house+', '+'flat: ' + this.flat;
        }
    };
    let reg = /(([А-ЯЁ]|\d{1,3})[-.]?\s*([а-яё]*)?\s*([А-ЯЁ][а-яё]*)?\s*([а-яё]*)?)(.?\s*([а-яё]*)?\s*(\d+[-]?[А-ЯЁ]?))?(([а-яё]*)?.*?(\d+))?/;
    let strtemp;
    let street = '';
    let house = '';
    let flat = '';
    let match = [];

    for(let i=0; i<arr.length; i++){
        strtemp = arr[i];
        match = strtemp.match(reg);
        street = match[1];
        house = match[8];
        flat = match[11];

        let obj = new Obj(street, house, flat);

        resultArr.push(obj);
    }
    return resultArr;
}
result = re(address);
module.exports = result;