assert = chai.assert

module('app')

describe("basic-unit", function() {

  var createController

  beforeEach(module('app'))

  beforeEach(inject(function($injector) {

    var locals = {
      $scope : $injector.get("$rootScope").$new()
    }

    var $controller = $injector.get("$controller")
    createController = function() {
       return $controller('RootController', locals)
     }
  }))

  beforeEach(inject(function($injector) {
    $httpBackend = $injector.get('$httpBackend')
  }))

  it("should do nothing", function() {
    assert.isOk('OK')
  })

  xit("process schema", function() {

    // var ajv = Ajv({ allErrors: true })
    // var validate = ajv.validate(schema.JSONSchema, data)
  })

})
