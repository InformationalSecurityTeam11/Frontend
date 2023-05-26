# InformationSecurityFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

##HTTPS Podesavanje
U angular.json fajlu dodati u objektu  "serve":
`"options": {
"browserTarget": "InformationSecurityFrontend:build",
"ssl": true,
"sslCert": "putanja-do-sertifikata koji app korisit",
"sslKey": "putanja do kljuca tog sertifikata"
},`
