



const fooditem = require("./fooditemSchema");

// const Createfooditems = async (req, res) => {
//     if (!req.body || !req.body.email || !req.body.name || !req.body.fooditems) {
//         return res.status(400).json({ message: "Invalid request body" });
//     }
//     const {
//         email,
//         name,
//         fooditems: [foodname, foodimage, price, itemrating]
//     } = req.body

//     const fooditemdetails = await fooditem.create({
//         email,
//         name,
//         fooditems: [foodname, foodimage, price, itemrating]
//     });

//     res.json(fooditemdetails);
// };

const Createfooditems = async (req, res) => {
    const {
        email,
        name,
        fooditems: [foodname, foodimage, price, itemrating]
    } = req.body

    const fooddetails = await fooditem.create({
        email,
        name,
        fooditems: [foodname, foodimage, price, itemrating]
    });

    res.json(fooddetails);
};

const getfooditems=async(req,res)=>{
    const fooditemList = await fooditem.find()
    res.json(fooditemList)
}
module.exports={getfooditems,Createfooditems }