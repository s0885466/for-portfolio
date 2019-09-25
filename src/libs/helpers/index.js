import * as R from 'ramda';

export const getOccupations = (data) => R.values(data);
export const getEmployees = (data) => R.values(data);

export const getQueryPath = search => {
    /*console.log(search);
    const searchParams = new URLSearchParams(search);
    const obj = {};
    for (let p of searchParams) {
        obj[p[0]] =p[1]
    }
    console.log(obj);*/
    /*const arr = url.split('/');
    return url !=='/'
        ? 'employees?' + arr[1] + '=' + arr[2]
        :'employees?'*/
};