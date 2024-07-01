import axios from "axios"

const initProducts=[
    {
    id:12,
    name:'Minitor de Samsung',
    price:500,
    description: "El monitor es increibles"
},
{
    id:1345,
    name:'Minitor de Samsung2',
    price:500,
    description: "El monitor2 es increibles2"
}
];

const baseUrl= "http://localhost:8080/products";

export const listProduct=()=>{
    return initProducts
}

export const findAll= async ()=>{

    try{
        const response= await axios.get(baseUrl);
        return response;
    }
    catch(e){

        console.log(e)

    }

    return null; 
    

}

export const create= async({name, description, price})=>{
 try
    {   const response= await axios.post(baseUrl, {
        name: name,
        description: description, 
        price: price
    });

    return response;
    }
    catch(e)
        {
        console.log(e)

        }

    return undefined; 

}

export const update= async({id,name, description, price})=>{
    try
    {   const response= await axios.put(`${baseUrl}/${id}`, {
        name: name,
        description: description, 
        price: price
    });

    return response;
    }
    catch(e)
        {
        console.log(e)

     }

    return undefined; 

}

export const remove= async(id)=>{
    try{
       await axios.delete(`${baseUrl}/${id}`)
    }catch(e){console.log(e)}
}