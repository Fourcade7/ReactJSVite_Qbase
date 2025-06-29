




const logurl = "http://46.149.70.77:3000/getbyid";


async function userGetBy(id) {

    try{
        let response = await fetch(`${logurl}/${id}`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
         });

         //let result = await response.json();
         //console.log(response);
         
         return response;

    }catch(error){
         //console.error("userGetBy error:", error);
         return null;
    }
    
}



export {userGetBy};