import { getAllRockets } from "./modules/rockets.js";
import { rocketGeneralInformation } from "./modulesComponents/box.js";
import { 
    progressRocketWeight, 
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket
} from "./modulesComponents/progressBar.js";

document.addEventListener("DOMContentLoaded", async () => {
    let information__2 = document.querySelector("#information__2");
    let information__1 = document.querySelector("#description__item");

    let dataRockets = await getAllRockets();
    let Totales = dataRockets.pop();
    let [Rocket1, Rocket2, Rocket3, Rocket4] = dataRockets;

    console.log(dataRockets);
    console.log(Totales);

    // information__2.append(...progressRocketWeight(Totales.kg_max, Rocket1));
    // information__2.append(...progressPayloadWeights(Totales.payload_weights, Rocket1));
    // information__2.append(...progressHeightRocket(Totales.height, Rocket1));
    // information__2.append(...progressDiameterRocket(Totales.diameter, Rocket1));
    // information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rocket1));
    // information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rocket1));

    // information__2.append(...progressRocketWeight(Totales.kg_max, Rocket2));
    // information__2.append(...progressPayloadWeights(Totales.payload_weights, Rocket2));
    // information__2.append(...progressHeightRocket(Totales.height, Rocket2));
    // information__2.append(...progressDiameterRocket(Totales.diameter, Rocket4));
    // information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rocket2));
    // information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rocket2));

    information__2.append(...progressRocketWeight(Totales.kg_max, Rocket3));
    information__2.append(...progressPayloadWeights(Totales.payload_weights, Rocket3));
    information__2.append(...progressHeightRocket(Totales.height, Rocket3));
    information__2.append(...progressDiameterRocket(Totales.diameter, Rocket3));
    information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rocket3));
    information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rocket3));

    // information__2.append(...progressRocketWeight(Totales.kg_max, Rocket4));
    // information__2.append(...progressPayloadWeights(Totales.payload_weights, Rocket4));
    // information__2.append(...progressHeightRocket(Totales.height, Rocket4));
    // information__2.append(...progressDiameterRocket(Totales.diameter, Rocket4));
    // information__2.append(...progressSecondStageDiameterRocket(Totales.composite_diameter, Rocket4));
    // information__2.append(...progressSecondStageHeightRocket(Totales.composite_height, Rocket4));

    // information__3.innerHTML = rocketGeneralInformation([Rocket2]); // Pasamos un array con un solo cohete
    information__1.innerHTML = rocketGeneralInformation([Rocket1]); // Pasamos un array con un solo cohete
});