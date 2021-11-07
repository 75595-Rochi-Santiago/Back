const {response, request}=require('express');
const fetch = require('node-fetch');



const getPhrases= async(req=request, res=response)=> {

       const phrases = await fetch(process.env.PHRASES_URL);
       const jsonPhrases = await phrases.json();

       res.json({
              jsonPhrases
       })
}

module.exports={
       getPhrases
}