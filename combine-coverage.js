const createReporter = require('istanbul-api').createReporter;
const istanbulCoverage = require('istanbul-lib-coverage');
const coverageMain = require('./coverage/ms-main-screen/coverage-final.json');
const coverageInterfaces = require('./coverage/interfaces/coverage-final.json');
const coverageLogin = require('./coverage/login/coverage-final.json');
const coverageVendors = require('./coverage/vendors/coverage-final.json');
// const coverageTools = require('./coverage/tools/coverage-final.json');

const map = istanbulCoverage.createCoverageMap();
Object.keys(coverageMain).forEach(filename => map.addFileCoverage(coverageMain[filename]));
Object.keys(coverageInterfaces).forEach(filename => map.addFileCoverage(coverageInterfaces[filename]));
Object.keys(coverageLogin).forEach(filename => map.addFileCoverage(coverageLogin[filename]));
Object.keys(coverageVendors).forEach(filename => map.addFileCoverage(coverageVendors[filename]));
// Object.keys(coverageTools).forEach(filename => map.addFileCoverage(coverageTools[filename]));

const reporter = createReporter();
reporter.addAll(['html', 'lcovonly', 'text-summary']);
reporter.write(map);
