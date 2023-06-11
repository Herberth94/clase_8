import { connect } from "mongoose";
export async function connectMongo() {
  try {
    await connect(
      "mongodb+srv://admin:F3wBDRmov2yob7pt@ecommerce.eq2fgne.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "ecommerce" // Especifica el nombre de tu base de datos aquí
      }
    );
    console.log("plug to mongo!");
  } catch (e) {
    console.log(e);
    throw "can not connect to the db";
  }
}

//F3wBDRmov2yob7pt