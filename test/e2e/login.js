var path = require('path')

describe('login', function() {

  xit('should show authentication', function() {
      browser.get('/')
      expect(element(by.model('login.username')).isPresent()).toBe(true);
      expect(element(by.model('login.password')).isPresent()).toBe(true);
      expect(element(by.id('login.submit')).isPresent()).toBe(true);
  })

})
