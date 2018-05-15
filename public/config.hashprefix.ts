hashPrefixConfig.$inject = ['$locationProvider'];

export default function hashPrefixConfig($locationProvider) {
  $locationProvider.hashPrefix('');
}
