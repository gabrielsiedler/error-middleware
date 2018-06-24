#!/usr/bin/env node

const Jasmine = require('jasmine');
const jasmine = new Jasmine();

jasmine.loadConfig(require('./jasmine.json'));
jasmine.jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

const JasmineConsoleReporter = require('jasmine-console-reporter');
const reporter = new JasmineConsoleReporter({
  colors: 1, // (0|false)|(1|true)|2
  cleanStack: 1, // (0|false)|(1|true)|2|3
  verbosity: 4, // (0|false)|1|2|(3|true)|4
  listStyle: 'indent', // 'flat'|'indent'
  activity: false
});

jasmine.env.clearReporters();
jasmine.addReporter(reporter);
jasmine.execute();
