import axios from 'axios';
import React, {useEffect } from 'react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const UsersForms = ({getUsers, usersSelection , selectionUser}) => {

    const { handleSubmit, register ,reset} = useForm()
    const defaulUser = {
       email: "",
       password: "" , 
       first_name: "" ,
       last_name: "", 
       birthday: "" }

    useEffect(()=>{
            if(usersSelection){
              reset(usersSelection)
            }else{
                reset(defaulUser)
               
            }
         
       },[usersSelection])


    const submit = (data) =>{
        console.log(data)
         
            if(usersSelection){
             axios.put(`https://users-crud.academlo.tech/users/${usersSelection.id} /`,data)
             .then(()=>{
                getUsers()
                selectionUser(null)
             })
             swal({
                title: "User New",
                icon: "success",
                timer:"1500",
               })
              
            }else{
            axios.post(`https://users-crud.academlo.tech/users/`, data)
            .then(() => {
                getUsers()
                reset(defaulUser)
            })

            swal({
                title: "User Deleted",
                icon: "success",
                timer:"1500",
               })
             
         
            }

 }



    return (
        <form className='Father' onSubmit={handleSubmit(submit)}>
            <div className='Face'>  
            <h1>Users</h1>
            </div>
            <div className='Contenedor-inputs'>
            <div className='DatosInputs'>  
            <div className='Contenedor-Dates'>
                  <section className='label'> 
                  <label htmlFor="email"> </label>
                  </section>
                  <section className='input'> 
                  <input
                  placeholder='address'
                  type="text" 
                  id='email' 
                   {...register("email")} 
                   />
                </section>
            </div>
            <div className='Contenedor-Dates'>
                  <section> 
                  <label htmlFor="password"> </label>
                  </section>
                  <section className='input'> 
                  <input
                  placeholder='password'
                  type="password" 
                  id='password' 
                   {...register("password")} 
                   />
                </section>
            </div>
            <div className='Contenedor-Dates'>
                  <section> 
                   <label htmlFor="first_name"> </label>
                   </section>
                   <section className='input'> 
                   <input
                   placeholder='Name'
                   type="text" 
                   id='first_name' 
                    {...register("first_name")} 
                    />
                    </section>
            </div>
            <div className='Contenedor-Dates'>
                <section>
                 <label htmlFor="last_name"> </label>
                 </section>
                 <section className='input'> 
                 <input
                 placeholder='Surname'
                 type="text" 
                 id='last_name' 
                  {...register("last_name")} 
                  />
                  </section>
            </div>
            <div className='Contenedor-Dates'>
                   <section> 
                   <label htmlFor="birthday"> </label>
                   </section>
                   <section className='input'> 
                    <input
                    placeholder='Birthday'
                    type="date" 
                    id='birthday'
                    {...register("birthday")}
                    />
                    </section>
            </div>
            <button> Log in </button>
            </div>
            </div>
         
            

        </form>
        
    );
};

export default UsersForms;