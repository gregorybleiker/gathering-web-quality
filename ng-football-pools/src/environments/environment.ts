const providers: any[] = [
  { provide: 'environment', useValue: 'Development' },
  { provide: 'baseUrl', useValue: 'url/to/api' },
  { provide: 'worldcupUrl', useValue: 'https://raw.githubusercontent.com/openfootball' }
];

export const ENV_PROVIDERS = providers;

export const environment = {
  production: false
};
