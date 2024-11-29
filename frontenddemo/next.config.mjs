/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        URL:process.env.URL
    },
    images:{
        domains:["res.cloudinary.com"]
    }
};

export default nextConfig;
