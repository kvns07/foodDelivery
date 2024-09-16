const express=require("express");
const router =express.Router();
router.post('/foodData',(req,res)=>{
    try {
        // console.log(global.food_data);
        res.send([global.food_data,global.food_cat]);
    } catch (error) {
        console.log(error.message);
        res.send("Server Error");
    }
})
module.exports=router;