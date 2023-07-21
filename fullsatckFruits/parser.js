
const bodyParser= (req)=>{
    return new Promise((resolve, reject)=>{
        try{
            req.on("data", (chunk)=>{
                resolve(JSON.parse(chunk));
            })
        }catch(error){
            reject(error)
        }
    })
}

module.exports = bodyParser;