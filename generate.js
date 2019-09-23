module.exports = function () {
    const faker = require('faker');
    const _ = require('lodash');

    const occupations = [
        'engineer',
        'programmer',
        'manager',
        'dealer'
    ];

    return {
        employees: _.times(100, function (n) {
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.image.people(),
                id_occupations: Math.floor(Math.random() * occupations.length)
            }
        }),
        occupations: _.times(occupations.length, function (n) {
            return {
                id: n,
                occupation: occupations[n]
            }
        }),
        city: _.times(100, function (n) {
            return {
                id: n,
                name: faker.address.city(),
                avatar: faker.image.city()
            }
        })
    }
};
