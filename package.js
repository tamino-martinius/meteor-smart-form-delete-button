Package.describe({
  name: "zaku:smart-form-delete-button",
  version: "1.0.1",
  summary: "Provides a delete button UI component for smart-form",
  git: "https://github.com/tamino-martinius/meteor-smart-form-delete-button.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2.1');
  api.use(['templating', 'mongo']);

  api.addFiles(['delete-button.html', 'delete-button.js'], 'client');
});
