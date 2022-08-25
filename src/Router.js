import React, {Component} from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Error from "./components/Error";
import Body from './components/Body';
import Footer from './components/Footer'; 
import Equipo from "./components/Equipo";
import NavBar from "./components/NavBar";
import Packs from "./components/Packs";
import Consultas from "./components/Consultas";
import Contacto from "./components/Contacto";
import NavBar1 from "./components/NavBar1";



class Router extends Component {
    render(){
        return(
           
            <BrowserRouter>
            <NavBar1/>
           
               
                

             {/*Configurar rutas y páginas*/}
                <Routes>
                    <Route path="/home" element={<Body/>}/>
                    <Route path="/equipo" element={<Equipo/>}/>
                    <Route path="/packs" element={<Packs/>}/>
                    <Route path="/consultas" element={<Consultas/>}/>
                    <Route path="/contacto" element={<Contacto/>}/>
                   

                    <Route component={Error}/>
                </Routes>
              

                <Footer/>
            </BrowserRouter>
        );
    }
}

export default Router;