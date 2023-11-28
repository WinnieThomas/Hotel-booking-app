/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        DB_LOCAL_URI: "mongodb://127.0.0.1:27017/bookit",
        DB_URI:"mongodb+srv://winnieantony1988:Wini3014@cluster0.1pmknv5.mongodb.net/"
    },
};

module.exports = nextConfig
