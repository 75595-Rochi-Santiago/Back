const {response, request}=require('express');
const fetch = require('node-fetch');


const getPhotos= async(req=request, res=response)=> {

       const photos = await fetch(process.env.PHOTOS_URL);
       const jsonphotos = await photos.json();

       res.json({
              jsonphotos
       })
}

module.exports={
       getPhotos
}