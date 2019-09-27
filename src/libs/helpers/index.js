import * as R from 'ramda';

export const getOccupations = (data) => R.values(data);
export const getEmployees = (data) => R.values(data);

export const getQueryPath = search => {

    const page = search.match(/_page=(\d+)/);
    const limit = search.match(/_limit=(\d+)/);
    const selector = search.match(/(\?\w+=\w+)/);
    /*console.log('page', page[1]);
    console.log('limit', limit[1]);
    console.log('query', query[1]);*/

    return {
        page: page[1],
        limit: limit[1],
        selector: selector[1],
    };
};