function sum(num1,num2){
    const result = num1 + num2;
    return result;
}
async function getserver(){
    const serverData = await fetch('https://fakestoreapi.com/products')
    const jsondata = await serverData.json();
    console.log(jsondata)
    return jsondata;
}
module.exports=getserver;