const fs = require("fs");

const reqHandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
  
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title> Enter message</title></head>");
        res.write(
          '<body><form action="/message" method="POST"><input name="message4" type="text"><button type="Submit">Send</button></form></body>'
        );
        res.write("</html>");
        return res.end(); // this point willl send response to client
      }
    
      if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
        console.log(chunk)
            body.push(chunk);
        });
     return req.on('end',()=>{
        //do something with chunks now
        const parseBody =Buffer.concat(body).toString();//bus is waiting in bus stop  so buffer is same and now we can work on it
       const message=parseBody.split('=')[1];
       //writeFilesync -- this will block the code execution until file operation is done so we use writeFile -- as its asychronus
        //fs.writeFileSync("message.txt", message);
    
        // this callback will run once we are done with file writing execution
        fs.writeFile('messasge.txt',message,(err)=>{
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        })
    
    })
    
      }
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title> node page</title></head>");
      res.write("<body><h1>Hello from my node</h1></body>");
      res.write("</html>");
      res.end(); // this point willl send response to client
      //res.write() //if now u write anything it will not be written in  response as u wrote res.end will give error

}

module.exports=reqHandler;
// //module.exports can also contain object
// //module.exports={
//     handler:reqHandler,
//     someText:'Lavi Rastogi'
// }
    

//shortcuts
//exports instead of module.exports