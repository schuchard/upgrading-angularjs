import 'angular';
import 'angular-mocks';
import './app';

const testContext = require.context('./test', true, /spec$/);
testContext.keys().forEach(testContext);
