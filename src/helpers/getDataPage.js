
const getDataPage = (images, offset, limit ) => {
       const size=images.length
       let previous='';
       let next='';
       let prevOffset;
       offset<limit?prevOffset=0:prevOffset=parseInt(offset)-10;

       (parseInt(offset)+parseInt(limit))>=(size)
              ?next=null
              :next=`${process.env.API_URL}/photos?offset=${(parseInt(offset)+parseInt(limit))}&limit=${limit}`;

       prevOffset<0
              ?previous=null
              :previous=`${process.env.API_URL}/photos?offset=${prevOffset}&limit=${limit}`;

       if((parseInt(offset)+parseInt(limit))<=size){
              
              const page=images.slice(offset,(parseInt(offset)+parseInt(limit)));
              return {
                     next,
                     previous,
                     page
              }
       }else{
              const page=images.slice(offset,size)
              return  {
                     next:null,
                     previous,
                     page
              }
       }
}
module.exports = {
    getDataPage
}