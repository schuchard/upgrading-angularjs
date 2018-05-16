export function locationServiceFactory(i: any) {
  return i.get('$location');
}

export const LocationServiceProvider = {
  provide: '$location',
  useFactory: locationServiceFactory,
  deps: ['$injector'],
};
