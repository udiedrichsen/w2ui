Package.describe({
  name: 'doedel:w2ui',
  summary: 'JavaScript UI library for data-driven web applications',
  version: '1.5.0',
  git: 'https://github.com/udiedrichsen/w2ui.git'
});

Package.onUse(function(api) {
  api.versionsFrom("1.0.1");
  api.use(["meteor","jquery"]);

  api.addFiles([
    'lib/kickstart.min.js',
    'lib/w2ui-fields.min.css',
    'lib/w2ui-fields.min.js',
    'lib/w2ui.min.css',
    'lib/w2ui.min.js',
    'lib/w2ui-dark.min.css'
  ], 'client');

});


