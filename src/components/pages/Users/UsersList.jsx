import React, { useState } from 'react';
import './UsersList.css'
import { DataGrid } from '@mui/x-data-grid';
import { users } from '../../../datas';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

const UsersList = () => {

    const [usersList, setUsersList] = useState(users)

    const userRemover = userID=>{
      setUsersList(usersList.filter(user=>user.id !== userID))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          renderCell : (params) => {
                return(
                    <div className="userInfo">
                        <img className='userImage' src={params.row.avatar} alt={params.row.username}/>
                        <span>{params.row.username}</span>
                    </div>
                )
          }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 250
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 200
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 200
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 100,
            renderCell: params =>{
                return(
                    < div className='actions'>
                    <Link to={`/direct-admin/user/${params.row.id}`}><button className='userEditBtn'>Edit</button></Link>
                    <DeleteOutlineIcon className='removeBtn' onClick={()=>userRemover(params.row.id)}/>
                    </div>
                )
            }
        }
      ];
    return (
        <div className='usersList'>
      <DataGrid
        rows={usersList}
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
      />
        </div>

    );
}

export default UsersList;
