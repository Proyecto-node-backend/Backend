# Proyecto Backend
Esta sera la parte backend usando node, express y ts
## Las dependencias que has instalado y para qué sirve cada una de ellas
- ###  Para el empaquetado del código usaremos Webpack
  - "webpack": "5.80.0"
  - "webpack-cli": "5.0.1"
  - "webpack-node-externals": "3.0.0"
  - "webpack-shell-plugin": "0.5.0"
- ### Usaremos Typescript en el proyecto
  - "typescript": "^5.0.4"
  - "ts-jest": "29.1.0"
  - "ts-node": "^10.9.1"
  - "@types/express": "4.17.17"
  - "@types/jest": "29.5.1"
  - "@types/node": "18.15.12"
  - "@typescript-eslint/eslint-plugin": "^5.59.0"
- ### Para escribir código más limpio usaremos eslint
  - "eslint": "^8.38.0"
  - "eslint-config-standard-with-typescript": "^34.0.1"
  - "eslint-plugin-import": "^2.27.5"
  - "eslint-plugin-n": "^15.7.0"
  - "eslint-plugin-promise": "^6.1.1"
- ### Para los test usaremos
  - "supertest": "6.3.3"
  - "jest": "29.5.0"
- ### Para monitorear los cambios y reiniciar automaticamente la aplicacion
  - "nodemon": "2.0.22"
- ### Serviremos archivos estáticos en un servidor web local para probar archivos HTML, CSS, JavaScript
  - "serve": "^14.2.0"
- ### Para ejecutar múltiples comandos de manera concurrente en la misma terminal
  - "concurrently": "8.0.1"
- ### Para manejar las variables de entorno
  - "dotenv": "16.0.3"
## Los scripts de NPM que hayas creado y para qué sirven cada uno de ellos
- ### Para transpilar el código de Ts a Js
  - "build": "npx tsc"
- ### Para iniciar el proyecto
  - "start": "node dist/index.js"
- ### Transpila, observa y reinicia si hay algun cambio de la aplicacion
  - "dev": "concurrently \"npx tsc --watch\" \"nodemon -q dist/index.js\""
- ### Ejecuta los test cons Jest
  - "test": "jest"
- ### Se utiliza para ejecutar las pruebas unitarias y luego servir el informe de cobertura generado en un <br> servidor web local para que pueda ser visto y analizado en un navegador web.
  - "serve:coverage":"npm run test && cd coverage/lcov-report && npx serve"
## Las variables de entorno que habrá que crear en el .env para cualquiera que lo descargue
  - Se necesita que creen las siguientes constantes:
    - PORT
