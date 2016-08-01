var addquery = require('../');

describe("addquery", function () {

  it("should add a querystring", function () {
    expect(
      addquery('myurl.com', 'hey=now')
    ).toBe( 'myurl.com?hey=now' );
  });

  it("should add a querystring with '&' separator, if string has existing querystring", function () {
    expect(
      addquery('myurl.com?original=hello', 'hey=now')
    ).toBe( 'myurl.com?original=hello&hey=now' );
  });

  it("should not add a saparator with querystring if string ends with separator", function () {
    expect(
      addquery('myurl.com?', 'hey=now')
    ).toBe( 'myurl.com?hey=now' );
  });

  it("should complete demonstration from readme", function () {
    addquery('myurl.com', 'hey=now');     // myurl.com?hey=now
    addquery('myurl.com?a=b', 'hey=now'); // myurl.com?a=b&hey=now
    addquery('myurl.com?', 'hey=now');    // myurl.com?hey=now
  });
  
});
