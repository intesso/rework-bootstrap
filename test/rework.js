var should = require('should');

// debug with:
//  mocha --debug-brk test/rework.js 
// and
//  node-inspector
// in other terminal
describe('css transformation with rework', function() {
  it('should add .bootstrap-admin to the right selectors in the right place', function() {
    var src = './test/fixtures/bootstrap.css';
    var target = './test/outputs/rework-bootstrap.css';

    var fs = require('fs');
    var rework = require('rework');
    var bootstrap = require('../index');

    var css = fs.readFileSync(src, 'utf-8');
    css = rework(css)
      .use(bootstrap('.bootstrap-admin'))
      .toString();
    fs.writeFileSync(target, css, 'utf-8');


    var output = css;
    output.should.match(/html \.bootstrap-admin/);
    output.should.match(/body \.bootstrap-admin/);
    output.should.not.match(/\.bootstrap-admin html/);
    output.should.not.match(/\.bootstrap-admin body/);
    output.should.not.match(/\.bootstrap-admin \.fade/);
    output.should.not.match(/\.bootstrap-admin \.modal-backdrop/);
  })

})