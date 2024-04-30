import {getAllRockets} from "./modules/rockets.js"

let information__2 = document.querySelector("#information__2");
let dataRockets = await getAllRockets();
console.log(dataRockets);
dataRockets.forEach(val => {
    let divInformationContainer = document.createElement("div");
    divInformationContainer.classList.add("information__container");
    let divFirst = document.createElement("div");
    let labelFist = document.createElement("label");
    labelFist.textContent = "Mass";
    let ProgressFist = document.createElement("progress");
    ProgressFist.max = 100;
    ProgressFist.value = `${val.mass.kg / 1000}`;
    ProgressFist.textContent = `${val.mass.kg / 1000}%`;
    let divLast = document.createElement("div");
    let spanLast = document.createElement("span");
    spanLast.textContent = "Lorem ipsum..";

    divFirst.append(labelFist);
    divFirst.append(ProgressFist)
    divLast.append(spanLast)
    divInformationContainer.append(divFirst)
    divInformationContainer.append(divLast)
    console.log(divInformationContainer);
    information__2.append(divInformationContainer);
});