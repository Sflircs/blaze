Package.describe({
  name: 'html-tools',
  summary: "Standards-compliant HTML tools",
  version: '1.0.11',
  git: 'https://github.com/meteor/blaze.git'
});

Package.onUse(function (api) {
  api.export('HTMLTools');

  api.use('htmljs@1.0.11');
  api.imply('htmljs@1.0.11');

  api.addFiles([
    'utils.js',
    'scanner.js',
    'charref.js',
    'tokenize.js',
    'templatetag.js',
    'parse.js'
  ]);
});

Package.onTest(function (api) {
  api.use('tinytest@1.0.11');
  api.use('underscore@1.0.9');

  api.use('html-tools');
  api.use('htmljs@1.0.11');
  api.use('blaze-tools@1.0.10'); // for `toJS`

  api.addFiles([
    'charref_tests.js',
    'tokenize_tests.js',
    'parse_tests.js'
  ]);
});
