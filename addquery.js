
var addquery = module.exports = (function (o) {

  o = function (uri, query) {
    return o.addquery(uri, query);
  };

  o.sep = function (uri) {
    return uri.match(/\?$|&$/)
      ? '' : uri.match(/\?/) ? '&' : '?';
  };

  o.addquery = function (uri, query) {
    return uri + o.sep(uri) + query;
  };

  return o;
  
}({}));
