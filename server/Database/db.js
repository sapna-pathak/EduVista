import mongoose from 'mongoose';
export const connectdb = async() =>
{
    try {
      await mongoose.connect("mongodb://localhost:27017/eduvista") ;
      console.log("database is connected") 
    } catch (error) {
        console.log(error)
    }
}