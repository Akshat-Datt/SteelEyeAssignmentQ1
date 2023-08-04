import timestamps from "../assets/timeStamps.json";

function convertTampToKeyValue(){
    let processedData = {};
    for(let item of timestamps.results){
        let id, data;
        id = item.id;
        data = item.timestamps;
        processedData[id] = data; 
    }
    return processedData;
}

export default convertTampToKeyValue;