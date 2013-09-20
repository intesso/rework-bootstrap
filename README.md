# rework-bootstrap

make bootstrap css non obtrusive

# description
- did you ever want to use twitter bootstrap, but not in every place?
- or did you want to have two different bootstrap versions on the same page?

here's one possible solution for you:

# html-usage
Just wrap the elements that use the custom bootstrap build in a div like this:

```html
<div class="nested-bootstrap">
  ... inline editing that uses the custom twitter bootstrap build of this rework plugin.
</div>
```
With this, the custom bootstrap does not interfere with your custom styles. 
The custom bootstrap styles are only applied within the elements inside of the elements with the class `nested-bootstrap`.


# plugin-usage

install: `npm install rework rework-bootstrap`

usage:
```javascript

var src = './test/fixtures/bootstrap.css';
var target = './test/outputs/rework-bootstrap.css';

var fs = require('fs');
var rework = require('rework');
var bootstrap = require('rework-bootstrap');

var css = fs.readFileSync(src, 'utf-8');
css = rework(css)
  .use(bootstrap('.nested-bootstrap'))
  .toString();
fs.writeFileSync(target, css, 'utf-8');
```

# tests
`mocha`

# license
MIT