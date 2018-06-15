const providers: any[] = [
  { provide: 'environment', useValue: 'Development' },
  { provide: 'baseUrl', useValue: 'http://localhost:3000' },
  { provide: 'worldcupUrl', useValue: 'https://raw.githubusercontent.com/openfootball' }
];

export const ENV_PROVIDERS = providers;

export const environment = {
  production: false
};
