import { v2 as cloudinary, config } from "cloudinary";
import env from "./env.js";


export const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: env.CLOUD_NAME,
    api_key: env.API_KEY,
    api_secret: env.API_SECRET,
  });

  next();
};

const uploader = cloudinary.uploader;
export { cloudinary, uploader };
