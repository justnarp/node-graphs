'use strict'

var xlsx = require('node-xlsx'),
    obj = xlsx.parse('applicant.xlsx');

var output = obj.filter(function (o) {
    return o.name == 'Test'
});

output = output[0].data.filter(function (o) {
    return o.length;
});

console.log(output);
