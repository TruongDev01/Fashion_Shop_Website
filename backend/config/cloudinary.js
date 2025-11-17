import { v2 as cloudinary } from 'cloudinary'
import mongoose from 'mongoose';
const connectCloudinary = async () => {
    mongoose.connection.on('connected', () => {
        console.log("cloudinary connected");

    })
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET

    });


}
export default connectCloudinary
