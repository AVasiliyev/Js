import Jasmine = require('jasmine');

const jasmine = new Jasmine('');

// const specFiles = jasmine.specFiles;
// const projectBaseDir = jasmine.projectBaseDir;

// jasmine.loadConfigFile('../spec/support/jasmine.json');
jasmine.loadConfig(
{
    "spec_dir": "spec",
    "spec_files": [
    "**/*[sS]pec.js"
],
    "helpers": [
    "helpers/**/*.js"
],
    "stopSpecOnExpectationFailure": false,
    "random": false
});

// jasmine.execute('', '17661459');
// jasmine.execute('', '17661460');

// jasmine.execute(['**/testrail.spec.js'], '');
// console.log('Run ...')
