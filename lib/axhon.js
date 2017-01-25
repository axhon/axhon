#! /usr/bin/env node
"use strict";
const Table = require('ascii-table'),
    data = require('../data/axhon.json');
const table = new Table('Axhon');

for(let key in data) {
    table.addRow(key, data[key]);
};

console.log(table.render());