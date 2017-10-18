assert = chai.assert

module('app')

describe("communications", function() {

  var $httpBackend
  var httpBackendRequestRegistry
  var requestHandler
  var createController
  var requests

  beforeEach(inject(function($injector) {

    $httpBackend = $injector.get('$httpBackend')
    httpBackendRequestRegistry = $injector.get('HttpBackendRequestRegistry')

    requestHandler = $httpBackend.when('POST', '/api/records')

    var locals = {
      $scope : $injector.get("$rootScope").$new()
    }

    var $controller = $injector.get("$controller")
    createController = function() {
       return $controller('RootController', locals)
     }
  }))

  xit("should post a request for a random resource", function() {
    requestHandler.respond(200, httpBackendRequestRegistry.records)
    var controller = createController()
    $httpBackend.flush()
  })

  xit("should reject a request for a random resource", function() {
    requestHandler.respond(500)
    var controller = createController()
    $httpBackend.flush()
  })
})
