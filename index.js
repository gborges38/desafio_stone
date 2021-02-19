var items = [{ price: 25, qtd: 2 }, { price: 50, qtd: 1 }]
var emails = ['ju1@g.com', 'ju2@g.com', 'ju3@g.com']

console.log(calcTotalPrice(items, emails))

function calcTotalPrice(items, emails) {
    if (emails.length === 0) throw new Error('Empty emails');
    if (items.length === 0) throw new Error('Empty items');
    if (checkEmails(emails) === false) throw new Error('Repeated Email');

    var totalPrice = 0;
    var result = {};

    for (var i = 0; i < items.length; i++) {
        var itemsPrice = items[i].price * items[i].qtd;
        totalPrice += itemsPrice;
    }

    if (totalPrice < 0) throw new Error('Invalid value');

    var pricePerPerson = Math.floor(totalPrice / emails.length);
    var rest = totalPrice % emails.length;

    for (let c = 0; c < emails.length; c++) {
        if (rest > 0) {
            result[emails[[c]]] = pricePerPerson + 1;
        } else {
            result[emails[[c]]] = pricePerPerson;
        }

        rest--;
    }

    return result;
}

function checkEmails(emails) {
    var arrEmails = [];

    for (var i = 0; i < emails.length; i++) {
        if (arrEmails.indexOf(emails[i]) != -1) {
            return false;
        }

        arrEmails.push(emails[i]);
    }
    
    return true;
}