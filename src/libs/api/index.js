export function getJson(url) {
    return fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            return (res.status) === 200
                ? res.json()
                : Promise.reject(`status:${res.status} ${res.statusText}`)
        })
}