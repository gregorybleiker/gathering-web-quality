const providers: any[] = [
  { provide: 'environment', useValue: 'Production' },
  { provide: 'baseUrl', useValue: 'url/to/api' },
  { provide: 'worldcupUrl', useValue: 'https://raw.githubusercontent.com/openfootball' }
];

export const ENV_PROVIDERS = providers;

export const environment = {
  production: true
};
