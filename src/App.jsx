import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersForms from './Components/UsersForms'
import ListaUsers from './Components/ListaUsers'
import axios from 'axios'

function App() {
  const [isUsers , setIsUsers] = useState([])
  const [usersSelection , setUsersSelection] = useState(null)

  useEffect(()=>{
    axios.get(`https://users-crud.academlo.tech/users/`)
    .then(res => setIsUsers(res.data))
  },[])

  const getUsers = ()=> {
     axios.get(`https://users-crud.academlo.tech/users/`)
     .then(res => setIsUsers(res.data))
  }

  const selectionUser= (user) =>{
        setUsersSelection(user)
        
  }
  

  return (
    <div className="App">
     <UsersForms getUsers={getUsers} usersSelection={usersSelection }  selectionUser={ selectionUser} />
     <ListaUsers isUsers={isUsers}  selectionUser= {selectionUser}   getUsers= { getUsers}   />

                             <footer className='Footer'>
                                 <div className='Contenedor-Footer'>
                                   <section> 
                                    <h5>
                                    Español
                                    English (US)
                                    Italiano
                                    Português (Brasil)
                                    Français (France)
                                    Deutsch
                                    日本語
                                    中文(简体)
                                    العربية
                                     हिन्दी
                                    </h5>
                                    </section>
                                    <section> 
                                     <h5>
                                     RegistrarteIniciar sesiónMessengerFacebook LiteWatchLugaresJuegosMarketplaceMeta PayOculusPortalInstagramBulletin
                                     </h5>
                                     </section>
                                     <section> 
                                     <h5>
                                     Recaudaciones de fondosServiciosCentro de información de votaciónPolítica de privacidadCentro de privacidadGruposInformaciónCrear anuncio

                                     </h5>
                                     </section>
                                     <section> 
                                     <h5>
                                     Crear páginaDesarrolladoresEmpleoCookiesOpciones de anunciosCondicionesAyudaSubir contactos y no usuariosConfiguraciónRegistro de actividad
                                     </h5>
                                     </section>

                                     <p className='Meta'>
                                     Meta © 2023
                                     </p>


                                 </div>
                            </footer>




    </div>
  )
}

export default App
