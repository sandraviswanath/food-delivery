
const food = require("./foodSchema");

const Createfood = async (req, res) => {
    const {
        email,
        name,
        phone,
        address,
        time,
        location,
        title,
        cover,
        place,
        rating,
        subtitle,
        fooditems: [foodname, foodimage, price, itemrating]
    } = req.body

    const fooddetails = await food.create({
        email,
        name,
        phone,
        address,
        time,
        location,
        title,
        cover,
        place,
        rating,
        subtitle,
        fooditems: [foodname, foodimage, price, itemrating]
    });

    res.json(fooddetails);
};



const getfood=async(req,res)=>{
    const foodList = await food.find()
    res.json(foodList)
}
module.exports={getfood,Createfood}