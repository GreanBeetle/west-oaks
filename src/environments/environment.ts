// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCSklI9zwiPxKlFRptSXJvAXrh_KPu1oNQ',
    authDomain: 'west-oaks-fe502.firebaseapp.com',
    databaseURL: 'https://west-oaks-fe502.firebaseio.com',
    projectId: 'west-oaks-fe502',
    storageBucket: 'west-oaks-fe502.appspot.com',
    messagingSenderId: '930542124272'
  }
};
