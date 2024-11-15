import Home from "./components/pages/Home/Home";
import UsersList from "./components/pages/Users/UsersList";
import NewUser from "./components/pages/NewUser/NewUser";
import Products from "./components/pages/Products/Products";
import Product from "./components/pages/Products/Product/Product";

let routes = [
    {path:'/' ,element:<Home/>},
    {path:'/users' ,element:<UsersList/>},
    {path:'/newuser' ,element:<NewUser/>},
    {path:'/products' ,element:<Products/>},
    {path:'/product/:id' ,element:<Product/>}
];

export default routes;