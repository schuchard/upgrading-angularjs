import 'angular';
import 'angular-mocks';
import './src/app';

var testContext = require.context('./src', true, /spec.js$/);
testContext.keys().forEach(testContext);
