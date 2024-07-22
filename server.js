const app = require('./app.js');
const port = 4000||process.env.port;

app.listen(port,()=>{
    console.log(`server is listening on port ${port}`)
});

 