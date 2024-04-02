const http=require('http');

const server=http.createServer((req,res)=>{
    let url=req.url;
    if(url === '/home'){
        res.write("<html>");
        res.write("<head><title>Home</title></head>");
        res.write("<body><h1>Welcome home</h1></body>");
        res.write("</html>");
        res.end();
    }
    else if(url ==='/about'){
        res.write("<html>");
        res.write("<head><title>About</title></head>");
        res.write("<body><h1>Welcome to About Us page</h1></body>");
        res.write("</html>");
        res.end();
    }else if(url ==='/node'){
        res.write("<html>");
        res.write("<head><title>Node</title></head>");
        res.write("<body><h1>Welcome to my Node Js project</h1></body>");
        res.write("</html>");
        res.end();
    }
})
server.listen(3000 , () => console.log('Server started on port 3000'));;
