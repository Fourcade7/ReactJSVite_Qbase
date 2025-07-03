


const getAllUserPagUrl = "http://46.149.70.77:3000/getalluserpag";
const getAllPartyPagUrl = "http://46.149.70.77:3000/party/getallpag";

async function getAllUserPag(page, limit) {
    try {
        let url = `${getAllUserPagUrl}?page=${page}&limit=${limit}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

       
        return response;

    } catch (error) {
        console.error("Pagination request error:", error);
        return null;
    }
}

async function getAllPartyPag(page, limit) {
    try {
        let url = `${getAllPartyPagUrl}?page=${page}&limit=${limit}`;

        let response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

       
        return response;

    } catch (error) {
        console.error("Pagination request error:", error);
        return null;
    }
}


export { getAllUserPag,getAllPartyPag };
