const getButton = document.querySelector("#getButton");
const sendButton = document.querySelector("#sendButton");
const sendRequest = function (method,url,data) {
    const myPromise = new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.setRequestHeader("Content-Type","application/json");
        xhr.responseType = "json";
        xhr.send(data);
        xhr.onload = function () {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
            xhr.onerror = function () {
                reject(new Error("Something was wrong"));
            }
        }
       
    });
    return myPromise;
}

function getData() {
    sendRequest("GET","https://jsonplaceholder.typicode.com/photos").then((res)=>{
        console.log(res);
    })
}
function sendtData() {
    sendRequest("POST","https://jsonplaceholder.typicode.com/posts",JSON.stringify({
        name : "Shariful",
        age : 23,
        country : "Bangladesh"
    })
    )
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err.meesage);
    })
}







getButton.addEventListener('click',getData);
sendButton.addEventListener('click',sendtData);

