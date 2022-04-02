import express,{Request,Response} from "express";
const app= express();
const port =  3000;


app.get('/', (req:Request, res: Response)=>{
   let helloMessage = 'hello 4dfdvfd4444'
    res.send(helloMessage)
})

app.listen(port, ()=>{
    console.log(`Server is running on port : ${port}`)
})