var rp = require('request-promise-native');


export default function getStock(id) {
    return rp('https://avanza.se/_mobile/market/stock/' + id);
}