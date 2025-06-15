


const url = "http://46.149.70.77:3000/login";


async function loginReq(data) {

    try{
        let response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
         });

         //let result = await response.json();
         //console.log(response);
         
         return response;

    }catch(error){
         //console.error("Login error:", error);
         return null;
    }
    
}

export default loginReq;