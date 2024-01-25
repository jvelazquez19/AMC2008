import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://jvelazquez:j0647895@dataloggger.f57rkvp.mongodb.net/DatosBD?retryWrites=true&w=majority"
    );
    console.log("Conectado");
  } catch (error) {
    console.log("Tiene un error", error);
  }
};
