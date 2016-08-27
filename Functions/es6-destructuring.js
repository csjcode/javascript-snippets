console.log('ES6 - Destructuring');

// Basic destructuring

function initiateTransfer({protocol, port, delay, retries, timeout, log}) {
     // code to initiate transfer
};
var options = {
  protocol: 'http',
  port: 800,
  delay: 150,
  retries: 10,
  timeout: 500,
  log: true
}
initiateTransfer(options);


// Combine destructuring with regular options

function initiateTransfer(param1, {protocol, port, delay, retries, timeout, log}) {
     // code to initiate transfer
}
initiateTransfer('some value', options);


// Default value to destrucured parameters

function initiateTransfer({
    protocol = 'http',
    port = 800,
    delay = 150,
    retries = 10,
    timeout = 500,
    log = true
}) {
     // code to initiate transfer
}




//
