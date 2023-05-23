let chai = require('chai')
console.log(chai)

//Assertions

chai.assert.isNull(null,'Provided value is not a null value')
chai.assert.isNotNull('null',"Provided value is null value")

// var sessionName = "API Functional Testing"
// let variable
// chai.assert.isDefined(variable,'Provided value is undefined')
// chai.assert.isUndefined(sessionName,"Provided value is defined")

var value= null
chai.assert.isOk(value,"Provided value is a falsy")