// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:
    {
      apiKey: "AIzaSyAZdPi4OSitMR--ZwfSX7tVU9yZAT_vQHQ",
      authDomain: "listangulardb.firebaseapp.com",
      databaseURL: "https://listangulardb.firebaseio.com",
      projectId: "listangulardb",
      storageBucket: "listangulardb.appspot.com",
      messagingSenderId: "108585835341"
    }
  
};
