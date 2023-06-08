import mongoose from "mongoose";
const URL = process.env.MONGO 

export const connect = () => {
  mongoose
    .connect(URL)
    .then((x) => {
      console.log(
        `Connected to Mongo! Database name: "${x.connections[0].name}"`
      );
    })
    .catch((err) => {
      console.error("Error connecting to mongo", err.reason);
    });
};

