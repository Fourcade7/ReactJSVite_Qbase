


const logurl = "http://46.149.70.77:3000/login";
const regurl = "http://46.149.70.77:3000/register";


async function loginReq(data) {

    try{
        let response = await fetch(logurl, {
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

async function regReq(data) {

    try{
        let response = await fetch(regurl, {
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

export  {loginReq,regReq};