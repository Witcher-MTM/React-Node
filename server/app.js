const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const Commands = require("./people.js");

app.get("/api",(req,res)=>{
    res.json({people:Commands.GetPeople()});
    console.log(Commands.GetPeople());
})
app.listen(PORT, () =>
{
    console.log(`SERVER START ${PORT}`);
});