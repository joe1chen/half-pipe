require.config({
  baseUrl: '/scripts',
  paths: {
    '<%= main_module_name %>': 'main'
  }
});

require(
  [
    // Add your dependencies here
  ],

  function(initialize/*, modules */){
    require(['<%= main_module_name %>'], function(initialize){
      initialize();
    });
  }
);
