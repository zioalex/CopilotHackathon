//write npm command line to install mocha
//npm install --global mocha

//command to run this test file
//mocha test.js

const assert = require('assert');
const http = require('http');

const server = require('./NodeServer');


describe('Node Server', () => {
    it('should return "key not passed" if key is not passed', (done) => {
        http
        .get('http://localhost:3000/get' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'key not passed');
                done();
            });
        });
    });
});



//add test to check get when key is equal to world

describe('Node Server', () => {
    it('should return "hello world" if key is equal to world', (done) => {  
        http
        .get('http://localhost:3000/get?key=world' , (res) => { 
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'hello world');
                done();
            });
        });
    });
});



//add test to check get when a phonenumber is passed and call

describe('Node Server', () => {
    it('should return "phone number is valid" if phonenumber is valid', (done) => {
        http
        .get('http://localhost:3000/get?key=1234567890' , (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'hello 1234567890');
                done();
            });
        });
    });
});

//add test to check get when a phonenumber Zurich/Switzerland number is passed to the call

describe('Node Server', () => {
    it('should return "phone number is valid" if phonenumber is valid', (done) => {
        http.get('http://localhost:3000/get?key=0441234567', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'hello 0441234567');
                done();
            });
        });
    });
});

//add test to check get when a phonenumber Zurich/Switzerland number is passed to the call
// what the ascii char for the sign +


describe('Node Server', () => {
    it('should return "phone number is valid" if phonenumber is valid', (done) => {
        http.get('http://localhost:3000/get?key=%2B41441234567', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'hello +41441234567');
                done();
            });
        });
    }
    );
});

//add a  test that a valida validateSpanishDNI is passed to the Node Server 

describe('Node Server', () => {
    it('should return "DNI is valid" if DNI is valid', (done) => {
        http.get('http://localhost:3000/get?key=12345678z', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, 'hello 12345678z');
                done();
            });
        });
    }
    );
});

//write test for returnColorCode red should return code #FF0000

describe('Node Server', () => {
    it('should return "#FF0000" if color is red', (done) => {
        http.get('http://localhost:3000/get?key=red', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, '#FF0000');
                done();
            });
        });
    }
    );
});

//write test for returnColorCode blue should return code #0000FF

describe('Node Server', () => {
    it('should return "#0000FF" if color is blue', (done) => {
        http.get('http://localhost:3000/get?key=blue', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, '#0000FF');
                done();
            });
        });
    }
    );
});

// //write test for returnColorCode green should return code #00FF00
describe('Node Server', () => {
    it('should return "#00FF00" if color is green', (done) => {
        http.get('http://localhost:3000/get?key=green', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, '#00FF00');
                done();
            });
        });
    }
    );
});

//write test for returnColorCode yellow should return code #FFFF00

describe('Node Server', () => {
    it('should return "#FFFF00" if color is yellow', (done) => {
        http.get('http://localhost:3000/get?key=yellow', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, '#FFFF00');
                done();
            });
        });
    }
    );
});

//write test for returnColorCode black should return code #000000

describe('Node Server', () => {
    it('should return "#000000" if color is black', (done) => {
        http.get('http://localhost:3000/get?key=black', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                assert.equal(data, '#000000');
                done();
            });
        });
    }
    );
});

// write test for to verify that the days between 2 days are returned

describe('Node Server', () => {
    it('should return "2" if 2 days are passed', (done) => {
        http.get('http://localhost:3000/get?key=2018-01-01,2018-01-03', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
                console.log(data);
            });
            res.on('end', () => {
                assert.equal(data, '2');
                done();
            });
        });
    }
    );
});

// write a test case to verify if I pass 2 dates with a difference of 999 days I get the message Tombola

describe('Node Server', () => {
    it('should return "Tombola" if 999 days are passed', (done) => {
        http.get('http://localhost:3000/get?key=2018-01-01,2020-09-26', (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
                console.log(data);
            });
            res.on('end', () => {
                assert.equal(data, 'Tombola');
                done();
            });
        });
    }
    );
}
);
