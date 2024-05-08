// export const getAllRockets = async ()=>{
//     let res = await fetch("https://api.spacexdata.com/v4/rockets")
//     let data = await res.json();
//     let listMass = [], 
//         listPayloadWeights = [], 
//         heightRocket = [], 
//         listDiameter = [], 
//         listaDiameterComposite = [],
//         listaHeightComposite = [];

//     data.forEach((val, id) => {
//         listMass.push(val.mass.kg);
//         listPayloadWeights.push(...val.payload_weights)
//         heightRocket.push(val.height)
//         listDiameter.push(val.diameter)
//         listaDiameterComposite.push(val.second_stage.payloads.composite_fairing.diameter)
//         listaHeightComposite.push(val.second_stage.payloads.composite_fairing.height)
//     });
    
//     listMass.sort((a,b) => b - a)
//     listPayloadWeights.sort((a,b) => b.kg - a.kg)
//     heightRocket.sort((a,b) => b.meters - a.meters)
//     listDiameter.sort((a,b) => b.meters - a.meters)
//     listaDiameterComposite.sort((a,b) => b.meters - a.meters)
//     listaHeightComposite.sort((a,b) => b.meters - a.meters)
//     data.push({
//         kg_max: listMass.shift(), 
//         payload_weights: listPayloadWeights.shift().kg,
//         height: heightRocket.shift().meters,
//         diameter: listDiameter.shift().meters,
//         composite_diameter : listaDiameterComposite.shift().meters,
//         composite_height: listaHeightComposite.shift().meters
//     });
//     return data;
// }                   



// export const getAllRockets = async () => {
//     try {
//         const res = await fetch("https://api.spacexdata.com/v4/rockets");
//         const data = await res.json();

//         // Extraer la información requerida y ordenarla
//         const sortedData = data.map(rocket => ({
//             kg_max: rocket.mass.kg,
//             payload_weights: rocket.payload_weights.sort((a, b) => b.kg - a.kg)[0].kg,
//             height: rocket.height.meters,
//             diameter: rocket.diameter.meters,
//             composite_diameter: rocket.second_stage.payloads.composite_fairing.diameter.meters,
//             composite_height: rocket.second_stage.payloads.composite_fairing.height.meters
//         })).sort((a, b) => b.kg_max - a.kg_max);

//         return sortedData;
//     } catch (error) {
//         console.error("Error fetching rocket data:", error);
//         throw error; // Re-throw the error to be handled elsewhere
//     }
// }

export const getAllRockets = async()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets");
    let data = await res.json();
    return data;
}

export const getAllRocketsForId =async(id)=>{
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`);
    let data = await res.json();
    return data;
}

export const getAllRocketsTotalMass = async()=>{
    let config = {
        headers: {
            "content-type": "aplication/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "mass": 1
                },
                "sort": {
                    "mass.kg": "desc"
                },
                "limit": 1
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs: [{mass} = maxMassRocket]} = await res.json();
    return mass;
}

export const getRocketPayloadTotalWeights = async() => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "name": 1,
                    "payload_weights": 1
                },
                "sort": {
                    "payload_weights.kg": "desc"
                },
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs} = await res.json();
    let data = []
    docs.forEach(val => {
        data.push(...val.payload_weights)
    });
    data.sort((a,b)=> b.kg - a.kg );
    let [maxPayloadWeightsRocket] = data;
    return maxPayloadWeightsRocket;
}

export const getAllRocketTotalHeight = async()=>{
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "height": 1
                },
                "sort": {
                    "height.meters": "desc"
                },
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs: [{diameter} = maxDiameterRocket]} = await res.json();
    return diameter;
}

export const getRocket_SecondStage_CompositeFairing_Diameter = async() => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "second_stage.payloads.composite_fairing.diameter": 1
                },
                "sort": {
                    "second_stage.payloads.composite_fairing.diameter": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs: [maxDiameterCompositeFairingRocket]} = await res.json();
    let {second_stage: {payloads: {composite_fairing: {diameter}}}} = maxDiameterCompositeFairingRocket
    return diameter;
}


export const getRocket_SecondStage_Payloads_CompositeFairing_Height = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "second_stage.payloads.composite_fairing.height": 1
                },
                "sort": {
                    "second_stage.payloads.composite_fairing.height": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs: [maxHeightCompositeFairingRocket]} = await res.json();
    let {second_stage: {payloads: {composite_fairing: {height}}}} = maxHeightCompositeFairingRocket
    return height;
}

export const getAllRocketEngineTotal = async () => {
    let config = {
        headers: {
            "content-type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options": {
                "select": {
                    "engines": 1
                },
                "sort": {
                    "engines.thrust_sea_level": "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    // console.log(await res.json());
    let { docs: [{ engines } = maxEnginesRocket] } = await res.json();
    return engines.thrust_sea_level;
    // { kN: 1780, lbf: 400000 }
}




