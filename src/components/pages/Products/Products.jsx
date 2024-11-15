import React, { useState } from 'react';
import './Products.css';
import { DataGrid } from '@mui/x-data-grid';
import { productsList } from '../../../datas';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
const Products = () => {

    const [products, setProducts] = useState(productsList)

    const productRemover = productID=>{
        setProducts(products.filter(product=> product.id !== productID))
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'product info',
          headerName: 'Name',
          width: 200,
          renderCell : (params) => {
                return(
                       <Link to={`/product/${params.row.id}`}>
                    <div className="productInfo">
                       <img className='productImage' src={params.row.avatar} alt={params.row.username}/>
                       <span>{params.row.title}</span>
                    </div>
                       </Link>
                )
          }
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 200
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: params =>{
                return(
                    < div className='actions'>
                    <Link to={`/product/${params.row.id}`}><button className='productEditBtn'>Edit</button></Link>
                    <DeleteOutlineIcon className='removeBtn' onClick={()=>productRemover(params.row.id)}/>
                    </div>
                )
            }
        }
      ]

    return (
        <div className='products'>
      <DataGrid
        rows={products}
        columns={columns}
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: 3,
              },
            },
          }}
        pageSizeOptions={4}
        disableSelectionOnClick
        checkboxSelection
      />
        </div>
    );
}

export default Products;
