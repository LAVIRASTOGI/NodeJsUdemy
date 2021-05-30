// core modules
//https:launch a server,send request
// https://launch ssl server
// fs --file systemßß
const http = require("http"); //--importing http intial module
// const fs = require("fs");
// function rqListner(req, res) {}


const routes =require('./routes')


//http.createServer(rqListner)   //--create server parameter where we write the listner  listner can be anoymnus function(normal or anoymus)

// //handling requests
// const server =http.createServer((req,res)=>{
// //console.log(req);
// //process.exit();//u can exit server with this as process.exit exits the evnet lopp of that particular listner
// console.log(req.url,req.method,req.headers)
// })

//server.listen(3000);  //act as a webserver which keep on listening the request

//node application does it with help of event looping (execute code when the listner is listned)
//add new event listner automatically once example node js add event req.on('end',()=>{}) in this registry of event emiiters once
//we are done with parsing of data node will go to the registry search for end event and whatever is inside the callback of end will be executed 


// //handling response
// //connect re routes and response
// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   if (url === "/") {
//     res.write("<html>");
//     res.write("<head><title> Enter message</title></head>");
//     res.write(
//       '<body><form action="/message" method="POST"><input name="message4" type="text"><button type="Submit">Send</button></form></body>'
//     );
//     res.write("</html>");
//     return res.end(); // this point willl send response to client
//   }

//   if (url === "/message" && method === "POST") {
//     const body = [];
//     req.on("data", (chunk) => {
//     console.log(chunk)
//         body.push(chunk);
//     });
//  return req.on('end',()=>{
//     //do something with chunks now
//     const parseBody =Buffer.concat(body).toString();//bus is waiting in bus stop  so buffer is same and now we can work on it
//    const message=parseBody.split('=')[1];
//    //writeFilesync -- this will block the code execution until file operation is done so we use writeFile -- as its asychronus
//     //fs.writeFileSync("message.txt", message);

//     // this callback will run once we are done with file writing execution
//     fs.writeFile('messasge.txt',message,(err)=>{
//         res.statusCode = 302;
//         res.setHeader("Location", "/");
//         return res.end();
//     })

// })

//   }
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title> node page</title></head>");
//   res.write("<body><h1>Hello from my node</h1></body>");
//   res.write("</html>");
//   res.end(); // this point willl send response to client
//   //res.write() //if now u write anything it will not be written in  response as u wrote res.end will give error
// });

//exporting routes and in routes writing all logic of url /,message

const server =http.createServer(routes)


server.listen(3000);



//request is steamed in chunks streams (reuest body parts1,,,2,3,4)------->(use data as buffer)fully parsed


//node js uses single js thread --- 