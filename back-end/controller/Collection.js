// const Collection = require("../model/CollectionSchema");


// const CreateCollection = async (req, res) => {
//     const {
        
//         address,
//         name,
//         phone,
//         email,
//         time,
//         title,
//         cover,
//         place,
//         location,
//         rating,
//         subtitle,
//         fooditems
       
//     } = req.body;
//     const [firstFoodItem] = fooditems;
//     const { foodname, foodimage, price, itemrating } = firstFoodItem;
     
//     try{

//     const collectiondetails = await Collection.create({
       
//         address,
//         name,
//         phone,
//         email,
//         time,
//         title,
//         cover,
//         place,
//         location,
//         rating,
//         subtitle,
//         fooditems: [{foodname, foodimage, price, itemrating}]
       
//     });

//     res.json(collectiondetails); 
// } catch(error){
//     res.status(500).json({error:"internal server error"})
// }
// };


// const getcollection = async (req, res) => {
//     try {
        
//         const collectionList = await Collection.find();
//         res.json(collectionList); 
//     } catch (error) {
       
//         console.error("Error fetching collections:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };

// module.exports={getcollection,CreateCollection}





// const Collection = require("../model/CollectionSchema");


// const CreateCollection = async (req, res) => {
//     const { 
//         address,
//         name,
//         phone,
//         email,
//         time,
//         title,
//         cover,
//         place,
//         location,
//         rating,
//         subtitle,
//         fooditems: [foodname, foodimage, price, itemrating],
//     } = req.body;

//     const collectiondetails = await Collection.create({
//         address,
//         name,
//         phone,
//         email,
//         time,
//         title,
//         cover,
//         place,
//         location,
//         rating,
//         subtitle,
//         fooditems: [foodname, foodimage, price, itemrating]
//     });

//     res.json(collectiondetails); 
// };



// const getcollection=async(req,res)=>{
//     const collectionList = await Collection.find()
//     res.json(collectionList)
// }
// module.exports={getcollection,CreateCollection};




const Collection = require("../model/CollectionSchema");

// const CreateCollection = async (req, res) => {
//     const {
//         address,
//         name,
//         phone,
//         email,
//         time,
//         title,
//         cover,
//         place,
//         location,
//         rating,
//         subtitle,
//         fooditems
//     } = req.body;
     
//     try {
//         let firstFoodItem = {};
//         if (Array.isArray(fooditems) && fooditems.length > 0) {
//             firstFoodItem = fooditems[0];
//         }

//         const { foodname, foodimage, price, itemrating } = firstFoodItem;

//         const collectiondetails = await Collection.create({
//             address,
//             name,
//             phone,
//             email,
//             time,
//             title,
//             cover,
//             place,
//             location,
//             rating,
//             subtitle,
//             fooditems: [{ foodname, foodimage, price, itemrating }]
//         });

//         res.json(collectiondetails);
//     } catch (error) {
//         console.error("Error creating collection:", error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// };


const CreateCollection = async (req, res) => {
    // Check if req.body exists and is an object
    if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({ error: 'Invalid request body' });
    }

    const { 
        address,
        name,
        phone,
        email,
        time,
        title,
        cover,
        place,
        location,
        rating,
        subtitle,
        fooditems,
    } = req.body;

    // Check if fooditems is an array and has at least one item
    if (!Array.isArray(fooditems) || fooditems.length === 0) {
        return res.status(400).json({ error: 'Invalid fooditems array' });
    }

    const collectiondetails = await Collection.create({
        address,
        name,
        phone,
        email,
        time,
        title,
        cover,
        place,
        location,
        rating,
        subtitle,
        fooditems,
    });

    res.json(collectiondetails); 
};


const getcollection=async(req,res)=>{
        const collectionList = await Collection.find()
        res.json(collectionList)
    }
    module.exports={getcollection,CreateCollection};
