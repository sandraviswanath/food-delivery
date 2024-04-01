// import axios from "axios";
// import React, { useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import "./RestaurantForm.css";
// import { Navigate, useNavigate } from "react-router-dom";

// const AddForm = () => {
//   const Navigate=useNavigate()
//   const [formData, setFormData] = useState({
  
//     email: "",
//     fooditems: [{ foodname: "", foodimage: "", price: "", itemrating: "" }],
//   });
//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const updatedMenus = [...formData.fooditems];
//     updatedMenus[index][name] = value;
//     setFormData({ ...formData, fooditems: updatedMenus });
//   };
  

//   const handleAddMenu = () => {
//     setFormData({
//       ...formData,
//       fooditems: [
//         ...formData.fooditems,
//         { foodname: "", foodimage: "", price: "", itemrating: "" },
//       ],
//     });
//   };


// const handleSubmit = async (e) => {
//   const storeemail=formData.email;
//   e.preventDefault();

// try {
//   // const response =await axios.post('http://localhost:5000/food')
  
//   const response = await axios.post("http://localhost:5000/createfooditems",{
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(formData),
// });
// const result = await response.json();
// console.log(result);

//   setFormData({
//     email: "",
//     fooditems: [{ foodname: "", foodimage: "", price: "", itemrating: "" }],
//   });
//   alert(` ${formData} updated..!!!`); 
// } 



// catch (error) {
// console.error("Error:", error);
// }
// Navigate(`/restaurantdetails/${storeemail}`)
// // Navigate(-1)

// };

// return (

// <div className="max-width">
// <Form onSubmit={handleSubmit} className="add-form ">

// {/* 
// <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 placeholder=" name(same name as you logined in)"
//                 name="name"
//                 value={formData.name}
//                 onChange={(e) =>
//                   setFormData({ ...formData, name: e.target.value })
//                 }
//               />
//             </Form.Group> */}
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 placeholder=" email(same email as you logined in)"
//                 name="email"
//                 value={formData.email}
//                 onChange={(e) =>
//                   setFormData({ ...formData, email: e.target.value })
//                 }
//               />
//             </Form.Group>
//             {formData.fooditems.map((display, index) => (
//           <div key={index}>
//             <Form.Group className="mb-3">
//               <Form.Label className="add-form-title">Food items</Form.Label>

//               <Form.Control
//                 type="text"
//                 placeholder="food name"
//                 name="foodname"
//                 value={display.foodname}
//                 onChange={(e) => handleInputChange(e, index)}
//               />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 placeholder=" price"
//                 name="price"
//                 value={display.price}
//                 onChange={(e) => handleInputChange(e, index)}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3">
//               <Form.Control
//                 type="text"
//                 placeholder="food rating"
//                 name="itemrating"
//                 value={display.itemrating}
//                 onChange={(e) => handleInputChange(e, index)}
//               />
//             </Form.Group>

//             <div className="mb-3 w-96">
//               <label
//                 htmlFor="formFile"
//                 className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
//               >
//                 food images
//               </label>
//               <input
//                 className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
//                 type="text"
//                 id="formFile"
//                 name="foodimage"
//                 value={display.foodimage}
//                 onChange={(e) => handleInputChange(e, index)}
//               />
//             </div>
//           </div>
//         ))}
        
//         <div className="add-menu-item">
//           <Button type="button" onClick={handleAddMenu}>
//             Add Menu Item
//           </Button>
//         </div> 
        
//         <div className="form-submit">
//         <Button type="submit">Submit</Button>
//       </div>
//       </Form>
//       </div>
// )
//          }
// export default AddForm;


import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./RestaurantForm.css";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    fooditems: [{ foodname: "", foodimage: "", price: "", itemrating: "" }],
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedMenus = [...formData.fooditems];
    updatedMenus[index][name] = value;
    setFormData({ ...formData, fooditems: updatedMenus });
  };

  const handleAddMenu = () => {
    setFormData({
      ...formData,
      fooditems: [
        ...formData.fooditems,
        { foodname: "", foodimage: "", price: "", itemrating: "" },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/createfooditems", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);
      setFormData({
        email: "",
        fooditems: [{ foodname: "", foodimage: "", price: "", itemrating: "" }],
      });
      alert("Data updated successfully");
      navigate(`/restaurantdetails/${formData.email}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-width">
<Form onSubmit={handleSubmit} className="add-form ">


 {/* <Form.Group className="mb-3">
               <Form.Control
               type="text"
                placeholder=" name(same name as you logined in)"
                name="name"
               value={formData.name}
                onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
                }
              />
            </Form.Group>  */}
            <Form.Group className="mb-3">
              <Form.Control
               type="text"
                placeholder=" email(same email as you logined in)"
                 name="email"
                value={formData.email}
                onChange={(e) =>
                 setFormData({ ...formData, email: e.target.value })
                }
             />
            </Form.Group>
            {formData.fooditems.map((display, index) => (
          <div key={index}>
             <Form.Group className="mb-3">
              <Form.Label className="add-form-title">Food items</Form.Label>

              <Form.Control
               type="text"
                placeholder="food name"
                 name="foodname"
                value={display.foodname}
               onChange={(e) => handleInputChange(e, index)}
              />
             </Form.Group>
            <Form.Group className="mb-3">
               <Form.Control
                 type="text"
                 placeholder=" price"
                 name="price"
               value={display.price}
                onChange={(e) => handleInputChange(e, index)}
              />
             </Form.Group>

             <Form.Group className="mb-3">
             <Form.Control
                type="text"
                 placeholder="food rating"
                 name="itemrating"
                 value={display.itemrating}
                onChange={(e) => handleInputChange(e, index)}
              />
            </Form.Group>

             <div className="mb-3 w-96">
              <label
                 htmlFor="formFile"
                className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
              >
                 food images
              </label>
              <input
                className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                type="text"
              id="formFile"
               name="foodimage"
               value={display.foodimage}
             onChange={(e) => handleInputChange(e, index)}
            />
          </div>
         </div>
       ))}
        
        <div className="add-menu-item">
         <Button type="button" onClick={handleAddMenu}>
           Add Menu Item
          </Button>
      </div> 
        
      <div className="form-submit">
      <Button type="submit">Submit</Button>
    </div>
     </Form>
      </div>
 
  );
};

export default AddForm;
