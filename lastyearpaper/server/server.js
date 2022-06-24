const express =require('express');
const cors =require('cors')
const app=express();
app.use(cors());
app.use(express.json());

const bookRouter = require('./routes/book')

app.use('/book', bookRouter)
app.listen(4000,'0.0.0.0',()=>{
    console.log('server is started on port 4000');
})