



import { useLocation } from "react-router-dom";
import NavbarScreen from "../navbar/navbar";
import ListGroup from 'react-bootstrap/ListGroup';
import { userGetBy } from "./detailApi";
import { useEffect, useState } from "react";





function DetailScreen(){

    const [data,setData]=useState(null);

    const location=useLocation();
    const dataL=location.state
    const id=dataL?.id;

    //fetch data with userById
    async function fetchData() {
        try{
            const response = await userGetBy(id);
            const result= await response.json();
            console.log(result);
            setData(result);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div>
            <div className="container-fluid bg-primary"><NavbarScreen></NavbarScreen></div>
            <div className="container-sm w-75">
                
            <h5 className="my-4">Данные пользователя</h5>         

            <ListGroup>
            <ListGroup.Item action >Id: {data?.id}</ListGroup.Item>
            <ListGroup.Item action >Имя: {data?.username}</ListGroup.Item>
            <ListGroup.Item action >Фамилия: {data?.surname}</ListGroup.Item>
            <ListGroup.Item action >Пол: {data?.sex==0 ? "Неизвестный" : data?.sex==1 ? "М" :"Ж"}</ListGroup.Item>
            <ListGroup.Item action >Создано в: {data?.createdAt}</ListGroup.Item>            
            <ListGroup.Item action >Все события: {data?.partylist.length}</ListGroup.Item>            
            <ListGroup.Item action >Номер карты: {data?.cardlist[0]?.number ?? "Номер карты не вставлен"}</ListGroup.Item>            
            </ListGroup>
            </div>
           
        
        </div>
    )
}


export {DetailScreen};