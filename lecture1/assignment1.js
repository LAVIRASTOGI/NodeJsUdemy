const https = require("http");
const fs = require("fs");
const server = https.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> Enter message</title></head>");
    res.write(
      '<body><form action="/create-user" method="POST"><input name="username" type="text"><button type="Submit">Click Me</button></form></body>'
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    req.on('end',()=>{
        const parseBody=Buffer.concat(body).toString();
        const msg=parseBody.split('=')[1];
        fs.writeFile('assignmentData.html',msg,(err)=>{
        res.statusCode=302;
        res.setHeader,('Location','/');   
        res.end(); 
       }) 
    })
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<body>");
    res.write("<ul>");
    res.write("<li>Lavi</li>");
    res.write("<li>Yashu</li>");
    res.write("<li>Dilip</li>");
    res.write("</ul>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
});

server.listen(3000);
