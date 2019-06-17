"use strict";

//TODO: добавить логирование ошибок в файл с помощью PM2

require('module-alias/register');
const axios = require("axios");
const http = require("@functions/http");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require("@routers/appRoutes");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const vkGlobal = require("@models/vkGlobal");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

routes(app);

test

app.listen(3000);





