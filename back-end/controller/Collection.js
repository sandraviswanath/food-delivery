const Collection = require("./CollectionSchema");




// const CreateCollection=async(req,res)=>{
//     const {title,cover,place,rating,subtitle,fooditems:[foodname,foodimage,price,itemrating]}=req.body;
    
//     const collectiondetails =await Collection.create({
//         title,cover,place,rating,subtitle,fooditems:[req.body.foodname,req.body.foodimage,req.body.price,req.body.itemrating]
//     })
//     res.json(collectiondetails )
// } 

const CreateCollection = async (req, res) => {
    const {
        title,
        cover,
        place,
        rating,
        subtitle,
        fooditems: [foodname, foodimage, price, itemrating]
    } = req.body;

    const collectiondetails = await Collection.create({
        title,
        cover,
        place,
        rating,
        subtitle,
        fooditems: [foodname, foodimage, price, itemrating]
    });

    res.json(collectiondetails);
};



const getcollection=async(req,res)=>{
    const collectionList = await Collection.find()
    res.json(collectionList)
}
module.exports={getcollection,CreateCollection}
