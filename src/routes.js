import Home from "./components/pages/Home/Home";
import UsersList from "./components/pages/Users/UsersList";
import NewUser from "./components/pages/NewUser/NewUser";
import Products from "./components/pages/Products/Products";
import Product from "./components/pages/Products/Product/Product";

let routes = [
    {path:'/direct-admin/' ,element:<Home/>},
    {path:'/direct-admin/users' ,element:<UsersList/>},
    {path:'/direct-admin/newuser' ,element:<NewUser/>},
    {path:'/direct-admin/products' ,element:<Products/>},
    {path:'/direct-admin/product/:id' ,element:<Product/>}
];

export default routes;
