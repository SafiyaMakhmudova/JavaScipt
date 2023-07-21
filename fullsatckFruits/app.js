const http = require("http");
const Io = require("./utils/Io");
const io = new Io("./database/fruits.json");
const newBuy = new Io("./database/buyFruit.json");
const newSell = new Io("./database/sellFruit.json");
const parser = require("./parser");
const Fruit = require("./utils/Fruit");


const server = http.createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("X-Content-Type-Options", "nosniff")
    if(req.method=="POST" && req.url=="/fruits" ){
        req.body = await parser(req);
        
        const {name, count, price, status} = req.body;
        const sum = (+count)*(+price); 
        
        const newSum = await newBuy.read(); 
        const newSellR = await newSell.read();
        const todos = await io.read();
        
        
        const id = (todos[todos.length-1]?.id||0)+1;
        if(status=="buy"){
            const fruit = new Fruit(id, name, count, price);
            const WriteBuy = {
                "name":`${name}`,
                "price":`${sum}`
            }

            const resultB = newSum.length? [...newSum, WriteBuy]:[WriteBuy];
            const result = todos.length? [...todos, fruit]:[fruit];
        
            await io.write(result);
            await newBuy.write(resultB);
            res.end(JSON.stringify({message: "CREATED"}));
    
        } else if(status=="sell"){
            const findProduct =  todos.find((item)=>item.name==name);
            if(!findProduct|| findProduct.count<count){
                console.log("Bunday mahsulot mavjud emas");
                
            } else{ 
                findProduct.count -= count;
            }
           
            const WriteBuy = {
                "name":`${name}`,
                "price":`${sum}`
            }

            const resultS = newSellR.length? [...newSellR, WriteBuy]:[WriteBuy];
        
            await io.write(todos);
            await newSell.write(resultS);
            
            res.end(JSON.stringify({message: "CREATED"}));
    
        }
    
        const generalB = await newBuy.read(); 
        const check = generalB.map((product)=>(+product.price)).reduce((acc,curr)=>acc+curr);
        
        const generalS = await newSell.read();
        const checkS = generalS.map((product)=>(+product.price)).reduce((acc,curr)=>acc+curr);
        
        
        console.log("FOYDA:", checkS-check);
        }
})

server.listen(5000, "localhost", () => {
    console.log("4000");
  });


