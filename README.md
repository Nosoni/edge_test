# Deploy de la aplicación
https://edge-test.herokuapp.com/

# Postman collection
La ubicación del archivo para pruebas en deploy
> ./edge_test.postman_collection.json

La ubicación del archivo para pruebas localmente
> ./edge_test_local.postman_collection.json

Una vez realizada la autenticación (login) se deberá cambiar el valor del token en los endpoints que así lo requiera.

# Documentación API
> ./documentacion.html

# .env
ENV_RUN="dev"
APP_PORT="3030"
SECRET_KEY="f08823e3-c43b-43d1-811c-e36c1216b0ad"
TOKEN_EXPIRATION_TIME="1h"
MIN_PASSWORD_LENGTH=5
FAKE_URL_DB="https://my-json-server.typicode.com/nosoni/edge_test"

# Instalar dependencias del proyecto
```
npm install
```

# Levantar el proyecto
```
npm start
```