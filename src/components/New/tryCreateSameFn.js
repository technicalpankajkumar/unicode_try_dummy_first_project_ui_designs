
export default function reduceValue (store){
      
    let value = Object.values(store.selects).map(data =>{
        return data.value
    }).map(data => {
        return Number(data?.mcq) + Number(data?.programming)+ Number(data?.descriptive)
    }).reduce((a,b)=> a+b)

    return value;
}