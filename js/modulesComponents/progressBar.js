//-------editado
// export const progressRocketWeight = (Totales, Rockets) => {
//     let conterDiv = [];

//     [Rockets].forEach(val => {
//         let divInformationContainer = document.createElement("div");
//         divInformationContainer.classList.add("information__container")
//         let divFirst = document.createElement("div");
//         let labelFirst = document.createElement("label");
//         labelFirst.textContent = "Rocket weight :";

//         let ProgressFirst = document.createElement("progress");
//         ProgressFirst.max = Totales;
//         ProgressFirst.value = `${val.mass.kg}`;
//         ProgressFirst.textContent = `${val.mass.kg}%`;


//         let divLast = document.createElement("div");
//         let spanLast = document.createElement("span");
//         let numKg = new Intl.NumberFormat('cop').format(val.mass.kg)
//         let numLb = new Intl.NumberFormat('cop').format(val.mass.lb)
//         spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`

//         divFirst.append(labelFirst)
//         divFirst.append(ProgressFirst)
//         divLast.append(spanLast)
//         divInformationContainer.append(divFirst)
//         divInformationContainer.append(divLast)
//         conterDiv.push(divInformationContainer)
//     });
//     return conterDiv
// }
// export const progressPayloadWeights = (Totales, Rockets) => {
//     let conterDiv = [];
//     Rockets.payload_weights.forEach(val => {
//         let divInformationContainer = document.createElement("div");
//         divInformationContainer.classList.add("information__container")
//         let divFirst = document.createElement("div");
//         let labelFist = document.createElement("label");
//         labelFist.textContent = `${val.name} :`;

//         let ProgressFist = document.createElement("progress");
//         ProgressFist.max = Totales;
//         ProgressFist.value = `${val.kg}`;
//         ProgressFist.textContent = `${val.kg}%`;


//         let divLast = document.createElement("div");
//         let spanLast = document.createElement("span");
//         let numKg = new Intl.NumberFormat('cop').format(val.kg)
//         let numLb = new Intl.NumberFormat('cop').format(val.lb)
//         spanLast.innerHTML = `${numKg} kg <br> ${numLb} lb`

//         divFirst.append(labelFist)
//         divFirst.append(ProgressFist)
//         divLast.append(spanLast)
//         divInformationContainer.append(divFirst)
//         divInformationContainer.append(divLast)
//         conterDiv.push(divInformationContainer)
//     });
//     return conterDiv
// }
// export const progressHeightRocket = (Totales, Rockets) => {
//     let conterDiv = [];
//     [Rockets.height].forEach(val => {
//         let divInformationContainer = document.createElement("div");
//         divInformationContainer.classList.add("information__container")
//         let divFirst = document.createElement("div");
//         let labelFist = document.createElement("label");
//         labelFist.textContent = `Rocket Height :`;

//         let ProgressFist = document.createElement("progress");
//         ProgressFist.max = Totales;
//         ProgressFist.value = `${val.meters}`;
//         ProgressFist.textContent = `${val.meters}%`;


//         let divLast = document.createElement("div");
//         let spanLast = document.createElement("span");
//         let numMeters = new Intl.NumberFormat('cop').format(val.meters)
//         let numFeet = new Intl.NumberFormat('cop').format(val.feet)
//         spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`

//         divFirst.append(labelFist)
//         divFirst.append(ProgressFist)
//         divLast.append(spanLast)
//         divInformationContainer.append(divFirst)
//         divInformationContainer.append(divLast)
//         conterDiv.push(divInformationContainer)
//     });
//     return conterDiv
// }
// export const progressDiameterRocket = (Totales, Rockets) => {
//     let conterDiv = [];
//     [Rockets.diameter].forEach(val => {
//         let divInformationContainer = document.createElement("div");
//         divInformationContainer.classList.add("information__container")
//         let divFirst = document.createElement("div");
//         let labelFist = document.createElement("label");
//         labelFist.textContent = `Rocket diameter :`;

//         let ProgressFist = document.createElement("progress");
//         ProgressFist.max = Totales;
//         ProgressFist.value = `${val.meters}`;
//         ProgressFist.textContent = `${val.meters}%`;


//         let divLast = document.createElement("div");
//         let spanLast = document.createElement("span");
//         let numMeters = new Intl.NumberFormat('cop').format(val.meters)
//         let numFeet = new Intl.NumberFormat('cop').format(val.feet)
//         spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`

//         divFirst.append(labelFist)
//         divFirst.append(ProgressFist)
//         divLast.append(spanLast)
//         divInformationContainer.append(divFirst)
//         divInformationContainer.append(divLast)
//         conterDiv.push(divInformationContainer)
//     });
//     return conterDiv
// }
// export const progressSecondStageDiameterRocket = (Totales, Rockets) => {
//     let conterDiv = [];
//     [Rockets.second_stage.payloads.composite_fairing.diameter].forEach(val => {
//         let divInformationContainer = document.createElement("div");
//         divInformationContainer.classList.add("information__container")
//         let divFirst = document.createElement("div");
//         let labelFist = document.createElement("label");
//         labelFist.textContent = `Diameter rocket shield :`;

//         let ProgressFist = document.createElement("progress");
//         ProgressFist.max = Totales;
//         ProgressFist.value = `${val.meters}`;
//         ProgressFist.textContent = `${val.meters}%`;


//         let divLast = document.createElement("div");
//         let spanLast = document.createElement("span");
//         let numMeters = new Intl.NumberFormat('cop').format(val.meters)
//         let numFeet = new Intl.NumberFormat('cop').format(val.feet)
//         spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`

//         divFirst.append(labelFist)
//         divFirst.append(ProgressFist)
//         divLast.append(spanLast)
//         divInformationContainer.append(divFirst)
//         divInformationContainer.append(divLast)
//         conterDiv.push(divInformationContainer)
//     });
//     return conterDiv
// }
// export const progressSecondStageHeightRocket = (Totales, Rockets) => {
//     let conterDiv = [];
//     [Rockets.second_stage.payloads.composite_fairing.height].forEach(val => {
//         let divInformationContainer = document.createElement("div");
//         divInformationContainer.classList.add("information__container")
//         let divFirst = document.createElement("div");
//         let labelFirst = document.createElement("label");
//         labelFirst.textContent = `Height rocket shield :`;

//         let ProgressFirst = document.createElement("progress");
//         ProgressFirst.max = Totales;
//         ProgressFirst.value = `${val.meters}`;
//         ProgressFirst.textContent = `${val.meters}%`;


//         let divLast = document.createElement("div");
//         let spanLast = document.createElement("span");
//         let numMeters = new Intl.NumberFormat('cop').format(val.meters)
//         let numFeet = new Intl.NumberFormat('cop').format(val.feet)
//         spanLast.innerHTML = `${numMeters} M <br> ${numFeet} F`

//         divFirst.append(labelFirst)
//         divFirst.append(ProgressFirst)
//         divLast.append(spanLast)
//         divInformationContainer.append(divFirst)
//         divInformationContainer.append(divLast)
//         conterDiv.push(divInformationContainer)
//     });
//     return conterDiv
// }

// --------------------------------------------------------------------------------------

// const createProgressElement = (labelText, valueMeters, valueFeet, total) => {
//     const divInformationContainer = document.createElement("div");
//     divInformationContainer.classList.add("information__container");

//     const divFirst = document.createElement("div");
//     const labelFirst = document.createElement("label");
//     labelFirst.textContent = labelText;

//     const progressFirst = document.createElement("progress");
//     progressFirst.max = total;
//     progressFirst.value = valueMeters;
//     progressFirst.textContent = `${valueMeters}%`;

//     const divLast = document.createElement("div");
//     const spanLast = document.createElement("span");
//     spanLast.innerHTML = `${new Intl.NumberFormat('cop').format(valueMeters)} M <br> ${new Intl.NumberFormat('cop').format(valueFeet)} F`;

//     divFirst.appendChild(labelFirst);
//     divFirst.appendChild(progressFirst);
//     divLast.appendChild(spanLast);
//     divInformationContainer.appendChild(divFirst);
//     divInformationContainer.appendChild(divLast);

//     return divInformationContainer;
// };

// export const progressRocketWeight = (Totales, Rockets) => {
//     return createProgressElement(
//         "Rocket weight:",
//         Rockets.mass.kg,
//         Rockets.mass.lb,
//         Totales
//     );
// };

// export const progressPayloadWeights = (Totales, Rockets) => {
//     const payloadWeight = Rockets.payload_weights[0]; // Assuming only one payload weight
//     return createProgressElement(
//         `${payloadWeight.name}:`,
//         payloadWeight.kg,
//         payloadWeight.lb,
//         Totales
//     );
// };

// export const progressHeightRocket = (Totales, Rockets) => {
//     return createProgressElement(
//         "Rocket Height:",
//         Rockets.height.meters,
//         Rockets.height.feet,
//         Totales
//     );
// };

// export const progressDiameterRocket = (Totales, Rockets) => {
//     return createProgressElement(
//         "Rocket diameter:",
//         Rockets.diameter.meters,
//         Rockets.diameter.feet,
//         Totales
//     );
// };

// export const progressSecondStageDiameterRocket = (Totales, Rockets) => {
//     const diameter = Rockets.second_stage.payloads.composite_fairing.diameter;
//     return createProgressElement(
//         "Diameter rocket shield:",
//         diameter.meters,
//         diameter.feet,
//         Totales
//     );
// };

// export const progressSecondStageHeightRocket = (Totales, Rockets) => {
//     const height = Rockets.second_stage.payloads.composite_fairing.height;
//     return createProgressElement(
//         "Height rocket shield:",
//         height.meters,
//         height.feet,
//         Totales
//     );
// };