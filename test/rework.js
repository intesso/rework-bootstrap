var should = require('should');

// debug with:
//  mocha --debug-brk test/rework.js 
// and
//  node-inspector
// in other terminal
describe('css transformation with rework', function() {
  it('should add .nested-bootstrap to the right selectors in the right place', function() {
    var src = './test/fixtures/bootstrap.css';
    var target = './test/outputs/rework-bootstrap.css';

    var fs = require('fs');
    var rework = require('rework');
    var bootstrap = require('../index');

    var css = fs.readFileSync(src, 'utf-8');
    css = rework(css)
      .use(bootstrap('.nested-bootstrap'))
      .toString();
    fs.writeFileSync(target, css, 'utf-8');


    var output = css;
    output.should.match(/html \.nested-bootstrap/);
    output.should.match(/body \.nested-bootstrap/);
    output.should.not.match(/\.nested-bootstrap html/);
    output.should.not.match(/\.nested-bootstrap body/);
    output.should.not.match(/\.nested-bootstrap \.fade/);
    output.should.not.match(/\.nested-bootstrap \.modal-backdrop/);
  })

})