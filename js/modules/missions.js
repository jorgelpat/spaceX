export const getAllMissions=async()=>{
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      fetch("https://api.spacexdata.com/v3/rockets", requestOptions)
}