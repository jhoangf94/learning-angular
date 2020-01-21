// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyAARqGCFvKWyGwOx6mE2PHSK5NjP9i5VNs",
  authDomain: "mysquaredangular4.firebaseapp.com",
  databaseURL: "https://mysquaredangular4.firebaseio.com",
  projectId: "mysquaredangular4",
  storageBucket: "mysquaredangular4.appspot.com",
  messagingSenderId: "88011637958",
  appId: "1:88011637958:web:b5a7c2c10388bbe7c603c7"
};

export const environment = {
  production: false,
  firebaseConfig
}


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
