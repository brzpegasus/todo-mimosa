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
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',
        text: 'vendor/text'
    },
    map: {
        templates: {
            'vendor/underscore': 'underscore'
        }
    }
});

require([
    'jquery',
    'underscore',
    'app/views/app',
    'app/routers/router',
    'templates'
], function($, _, AppView, Workspace, templates) {
    $(document).attr('title', "Mimosa-Flavored Todo App");
    $('body').html(templates.index).show();

    // Initialize routing and start Backbone.history()
    new Workspace();
    Backbone.history.start();

    // Initialize the application view
    new AppView();
});
