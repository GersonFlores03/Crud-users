import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';

const ListaUsers = ({isUsers ,  getUsers ,selectionUser}) => {

 const listUser = isUsers.sort((a,b) => a.first_name.localeCompare(b.first_name))

 const deleteUser = (user) =>{
    swal({
         title: "User Deleted",
         icon: "success",
         timer:"1500",
        })

         axios.delete(`https://users-crud.academlo.tech/users/ ${user.id} /`)
          .then(()=>  getUsers())
}


    return (
        <div className='Contenedor'>
            <h1>Users  <i className='bx bxs-user-account' ></i>  </h1>
            <div className='Datos'>
                 {  
                    listUser.map(user => (
                        <div className='Counter' key={user.id}>
                            <h2> Tarjets</h2>
                            <div className='Users'> 
                            <h3> <i className='bx bx-user'></i>  {user.first_name} {user.last_name} </h3>
                            <h3> <i className='bx bx-envelope' ></i>  {user.email}   </h3>
                            <h3> <i className='bx bx-key'></i>   {user.password} </h3>
                            <h3> <i className='bx bx-party'></i> {user.birthday}  </h3>
                            <div className='Buton'> 
                            <section className='Edit'>  
                            <button onClick={()=>selectionUser(user)}> <i className='bx bxs-edit-alt'></i> </button>
                            </section>
                            <section className='Delet'> 
                            <button onClick={()=>deleteUser(user)}> <i className='bx bxs-trash' ></i> </button>
                            </section>
                            </div>
                           
                            </div>
                           
                             
                        </div>
                        
                    ))
                 }
            </div>
            
        </div>
    );
};

export default ListaUsers;