export const getAllRockets=async()=>{
    let res=await fetch("https://api.spacexdata.com/v4/rockets")
    let data= await res.json()
    let listMass = [];
    data.forEach(element => {
        listMass.push(val.mass.kg);
    })
    listMass.sort((a,b)=>b-a)
    data.push(listMass.shift());    // shift sca el primer elemento de un arreglo de datos
    return data;
}