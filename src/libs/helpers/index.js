import * as R from 'ramda';

export const getOccupations = (data) => R.values(data);
export const getEmployees = (data) => R.values(data);

export const getQueryPath = search => {
    const searchParams = new URLSearchParams(search);
    const obj = {};
    for (let p of searchParams) {
        obj[p[0]] = p[1]
    }
    let str = '?';
    for (let key in obj) {
        str = str + '&' + key + '=' + obj[key]
    }
    console.log(str);
    return str;
};