
Package.describe({
  name    : 'semantic:ui-container',
  summary : 'Semantic UI - Container: Single component release',
  version : '2.2.10',
  git     : 'git://github.com/Semantic-Org/UI-Container.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'container.css'
  ], 'client');
});
