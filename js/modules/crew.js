// const endpoint = "https://api.spacexdata.com/v4/crew"

// const getMeh = async () => {
//     const body = document?.querySelector('body');
//     let htmlContent = "";
  
//     const clients = await (await fetch(`${endpoint}`)).json();
  
//     clients.forEach(element => {
//       htmlContent += `<img src="${element.image}" referrerpolicy="no-referrer">`;
//     });
  
//     body.innerHTML = htmlContent;
// }

// getMeh()

// const endpoint = "https://api.spacexdata.com/v4/crew";

// const getMeh = async () => {
//     const body = document.querySelector('body');
  
//     const response = await fetch(endpoint);
//     const crewMembers = await response.json();
  
//     body.innerHTML = crewMembers.map(member => `<img src="${member.image}" referrerpolicy="no-referrer">`).join('');
// }

// getMeh();

const endpoint = "https://api.spacexdata.com/v4/crew";
const getMeh = async()=>{
    const body = document?.querySelector("body");   // se pone document?. para acceso seguro
    let htmlContent = "";
    const clients = await (await fetch(`${endpoint}`)).json();
    clients.forEach(element => {
        htmlContent += `<img src="${element.image}" referrerpolicy="no-referrer"`;
    });
    body.innerHTML = htmlContent;
}

getMeh();