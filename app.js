const express = require('express');
const app = express();


app.get('/',function (req, res){
  res.send('Hello World!');
})
app.get("/about", function(req,res){
    res.sendFile('./views/about.html',{root:__dirname});
})
// app.get("/about", function (req, res) {
//   res.sendFile("C:\Users\AAditya\Desktop\AASHIMA\AASHIMA\backend\views\about.html");
// });
// views\about.html
// C:\Users\AAditya\Desktop\AASHIMA\AASHIMA\backend\views\about.html
// redirect

app.get('/aboutus',(req,res)=>{
  res.redirect('/about')
})
// 404
app.use((req,res)=>{
  res.status(404).sendFile("./views/404.html", {root:__dirname});
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})  