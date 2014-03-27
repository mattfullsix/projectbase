// requirejs / r.js config
require.config({
    baseUrl: '/js',
    paths: {
        jquery: ['//code.jquery.com/jquery-1.11.0.min', 'lib/jquery-1.11.0'],
        validate: ['//ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min', 'lib/jquery.validate'],
        underscore: 'lib/underscore',
        l33teral: 'lib/l33teral'
    },
    shim: {
        validate: {
            deps: ['jquery'],
            exports: 'validate'
        },
        l33teral: {
            deps: ['underscore'],
            exports: 'l33teral'
        }
    }
});