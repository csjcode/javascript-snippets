

// Example of basic template literal

const firstName = 'Jane';
console.log(`Hello ${firstName}!
How are you
today?`);

/* Output
Hello Jane!
How are you
today?
*/


// Example of basic template literal

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

/* output:
"Hello Foo,
want to buy 7 Bar for
a total of 294 bucks?"

*/


// Example of template literal for HTML

const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];

const tmpl = addrs => `
    <table>
    ${addrs.map(addr => `
        <tr><td>${addr.first}</td></tr>
        <tr><td>${addr.last}</td></tr>
    `).join('')}
    </table>
`;
console.log(tmpl(data));


/* output

    <table>

        <tr><td><Jane></td></tr>
        <tr><td>Bond</td></tr>

        <tr><td>Lars</td></tr>
        <tr><td><Croft></td></tr>

    </table>

*/
