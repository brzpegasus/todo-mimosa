// Require.js allows us to configure shortcut alias
requirejs.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: 'vendor/jquery.min',
        underscore: 'vendor/underscore.min',
        backbone: 'vendor/backbone.min'
    }
});

require([
    'jquery',
    'underscore',
    'app/views/app',
    'app/routers/router'
], function($, _, AppView, Workspace) {
    // Initialize routing and start Backbone.history()
    new Workspace();
    Backbone.history.start();

    // Initialize the application view
    new AppView();
});
