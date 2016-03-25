
export function config ($logProvider, $httpProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);
  $httpProvider.interceptors.push(function() {
  return {
   'request': function(config) {
      if (config.url.includes('api')) config.url = 'http://localhost:4000' + config.url
      return config
    },

    'response': function(response) {
      return response
    }
  };
});
}
