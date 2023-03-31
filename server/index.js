const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");

const sensorSchema = require("./models/sensor");
const lecturasSchema = require("./models/lecturas");

require("dotenv").config();

const app = express();

//crea el puerto despues de || le declaramos el puerto en el que se quiere trabjar si es que lo no crea
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

app.use("/img", express.static(__dirname + "/imagenes"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("conectado a mongo atlas");
  })
  .catch((err) => {
    console.log(`error al conectar a mongo atlas ${err}`);
  });

app.get("/", (req, res) => {
  res.status(200).send("app sensor is available");
});

//Sensores
app.post("/sensor", (req, res) => {
  const sensor = sensorSchema(req.body);
  sensor
    .save()
    .then((data) => {
      //informacion guardada en data
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(101).send(err);
    });
});

//Lecturas
app.post("/lectura", (req, res) => {
  let lec = {
    id_sensor: req.body.id_sensor,
    valor: Number.parseFloat(req.body.valor),
    fecha: new Date(),
  };
  const lectura = lecturasSchema(lec);
  lectura
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(101).send(err);
    });
});

app.get("/lecturas/:id", (req, res) => {
  const { id } = req.params;
  lecturasSchema
    .find({ id_sensor: id }) //Consulta a mongo 😂😎😎👌
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(101).send(err);
    });
});

app.get("/sensores", (req, res) => {
  sensorSchema
    .find()
    .then((data) => {
      res.status(200).send({
        datos:cambiarDatos(data)
      });
     
    })
    .catch((err) => {
      res.status(101).send(err);
    });
});

const cambiarDatos = (datos) => {
  let datos1 = [];
  datos.map((dato) => {
    datos1.push({
      label: dato.nombre,
      value: dato._id,
    });
  });
  return datos1;
};

app.listen(port, () =>
  console.log(`servidor escuchando por el puerto ${port}`)
);
