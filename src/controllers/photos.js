const {response, request}=require('express');
const fetch = require('node-fetch');
const { getDataPage } = require('../helpers/getDataPage');


const getPhotos= async(req=request, res=response)=> {

       const {offset=0, limit=10}=req.query;

       const photos = await fetch(process.env.PHOTOS_URL);
       const jsonphotos = await photos.json();

       const data=getDataPage(jsonphotos,offset,limit)
       res.json({
              data
       })
}

module.exports={
       getPhotos
}