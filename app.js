const express =require('express');
const routes  =require('./routes/index');
const mongoose =require('mongoose');

const app = express();
const PORT=process.env.PORT||5000;
const LOCAL_ADDRESS=process.env.LOCAL_ADDRESS;


app.use(express.json());
app.use('/', routes);
// mongoose.connect(`${LOCAL_ADDRESS}/tours`,{
  mongoose.connect('mongodb://localhost:27017/tours',{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false
});

// error handler
app.use((err, req, res, next)=> {
  res.status(400).json({
    error:err
  });
});

app.listen(PORT,()=>{
  console.log("Listening to port :"+PORT);
})
