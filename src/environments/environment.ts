// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyCZww2CXkwh3byleSd_SmUkoHJbJqXgVAo',
      authDomain: 'affluent-cms-database-a6.firebaseapp.com',
      databaseURL: 'https://affluent-cms-database-a6.firebaseio.com',
      projectId: 'affluent-cms-database-a6',
      storageBucket: 'affluent-cms-database-a6.appspot.com',
      messagingSenderId: '319880768653'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
