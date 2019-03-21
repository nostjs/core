import mongoose from "mongoose";

export default async () => {
  if (process.env.MONGODB) {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
    });

    return mongoose;
  } else {
    throw new Error("MONGODB environment variable not found.");
  }
};
