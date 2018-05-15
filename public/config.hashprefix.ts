HashPrefixConfig.$inject = ['$locationProvider'];

export function HashPrefixConfig($locationProvider) {
  $locationProvider.hashPrefix('');
}
