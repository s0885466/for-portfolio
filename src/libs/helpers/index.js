import * as R from 'ramda';

export const getOccupations = (data) => R.values(data);
export const getEmployees = (data) => R.values(data);

export const getQueryPath = url => {
    const arr = url.split('/');
    return url !=='/'
        ? 'employees?' + arr[1] + '=' + arr[2]
        :'employees?'
};