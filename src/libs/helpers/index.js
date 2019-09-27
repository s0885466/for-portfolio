import * as R from 'ramda';

export const getOccupations = (data) => R.values(data);
export const getEmployees = (data) => R.values(data);

export const getQueryPath = search => {
    if (!search) return {
        page: 1,
        limit: 10,
        selector: '?'
    };

    const page = search.match(/_page=(\d+)/);
    const limit = search.match(/_limit=(\d+)/);
    const selector = search.match(/(\?\w+=\w+)/);

    return {
        page: page[1],
        limit: limit[1],
        selector: selector[1],
    };
};