var path = require('path')

describe('basic e2e', function() {

  it('check title', function() {
      browser.get('/')
      expect(browser.getTitle()).toEqual('xflow-webclient')
  })

})
