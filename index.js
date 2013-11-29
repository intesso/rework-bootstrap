module.exports = function bootstrap(str) {
  return function bootstrap(style) {
    var walk = require('rework-walk');
    walk(style, function(rule, node) {
      if (!rule.selectors) return rule;

      rule.selectors = rule.selectors.map(function(selector) {
        if (selector.indexOf('html') === 0) {
          // replace
          return selector.replace('html', 'html ' + str);
        }
        if (selector.indexOf('body') === 0) {
          // replace
          return selector.replace('body', 'body ' + str);
        } else if (selector.indexOf('.modal-backdrop') >= 0 || selector.indexOf('.fade') >= 0 || selector.indexOf('font-face') >= 0) {
          // ignore
          return selector;
        } else {
          // prepend
          return str + ' ' + selector;
        }
      });
    });
  }
};
