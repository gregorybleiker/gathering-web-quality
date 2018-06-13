const providers: any[] = [
  { provide: 'environment', useValue: 'Development' },
  { provide: 'baseUrl', useValue: 'url/to/api' }
];

export const ENV_PROVIDERS = providers;

export const environment = {
  production: false
};
