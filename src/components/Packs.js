import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../assets/images/logo ni pio  circulo turquesa.png';
import mujerNina from '../assets/images/mujerNina.png';
import ninoBeso from '../assets/images/nino-beso.png';
import SlidersPacks from "./SliderPacks";

class  Packs extends Component {

    render() {

        return(
            <body className="menu-video">
    
            <main>
               <SlidersPacks/>
                <div className="lineal"></div>
            
                <section className="video-content-container">
            
                    <div className="text-content">
                        <h1>Diseñado para adaptarse a ti</h1>
                        <p>Especialmente indicado para bebés que comienzan a producir sus primeras palabras
                            y niños/as que presentan dificultades de comunicación. <br/>Nuestro pack de logopedia contiene todo lo necesario para
                            enseñar y rehabilitar de un modo exitoso.<br/> Nuestras logopedas y psicólogas especialistas en la comunicación,<br/>
                            crearán un plan de intervención logopédica individualizado.
                        </p>                
            
                    </div>
                </section>
                    
                <section className="table-packs">
                    <div className="packs">
                        <div className="pack-left">
                            <div className="pack-titulo">
                                <img src={logo} alt="logo" />
                                <h4>Pack Premium</h4>
                            </div>
                            <div className="image1"><img src={mujerNina} alt="niña" /></div>

                            <div className="pack-list">
                                <ul>
                                    <li className="list-pack"><ion-icon name="checkmark-outline"></ion-icon>Estudio del caso +</li>
                                    <li className="list-pack"><ion-icon name="checkmark-outline"></ion-icon>Plan de Intervención Logopédica</li>
                                    <li className="list-pack1">45€</li>
                                    <li className="list-pack"><ion-icon name="checkmark-outline"></ion-icon>Sesión de seguimiento</li>
                                    <li className="list-pack2">15€ (mín. 4)</li>
                                </ul>
                            </div>

                            <div className="enlace-price">
                                <a href="packPremium.php">Más información</a>
                            </div>
                        </div>

                        <div className="pack-right">
                            <div className="include-text"><p>Incluye:</p></div>
                            <div className="include-list">
                                <ul>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Estudio del caso: Cuestionario inicial y registro fonológico.
                                    </li>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Videoconsulta telefónica de 1 hora para revisar, valorar y evaluar las necesidades del pequeño/a y la familia. 
                                    </li>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Plan de Intervención Logopédica Individualizado.
                                    </li>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Guía con pautas y estrategias para favorecer la comunicación y el lenguaje.
                                    </li>
                                </ul>
                            </div>

                            <div className="include-text"><p>Sesiones de seguimiento:</p></div>
                            <div className="include-list">
                                <ul>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Registros diarios para valorar la evolución.
                                    </li>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Videollamadas de seguimiento. 
                                    </li>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Servicio de email para resolver dudas y recibir feedback de la especialista.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="packs">
                        <div className="pack-left">
                            <div className="pack-titulo">
                                <img src={logo} alt="niña" />
                                <h4>Pack Flexible</h4>
                            </div>

                            <div className="image1"><img src={ninoBeso} alt="niña" /></div>
                            <div className="pack-list">
                                <ul>
                                    <li className="list-pack"><ion-icon name="checkmark-outline"></ion-icon>Estudio del caso +</li>
                                    <li className="list-pack"><ion-icon name="checkmark-outline"></ion-icon>Plan de Intervención Logopédica</li>
                                    <li className="list-pack1">60€</li>
                                    <li className="list-pack"><ion-icon name="checkmark-outline"></ion-icon>Sin seguimiento</li>
                                </ul>
                            </div>

                            <div className="enlace-price">
                                <a href="packFlexible.php">Más información</a>
                            </div>
                        </div>

                        <div className="pack-right">
                            <div className="include-text"><p>Incluye:</p></div>
                            <div className="include-list">
                                <ul>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Estudio del caso: Cuestionario inicial y registro fonológico.
                                    </li>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Videoconsulta telefónica de 1 hora para revisar, valorar y evaluar las necesidades del pequeño/a y la familia. 
                                    </li>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Plan de Intervención Logopédica Individualizado.
                                    </li>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Guía con pautas y estrategias para favorecer la comunicación y el lenguaje.
                                    </li>
                                </ul>
                            </div>

                            <div className="include-list">
                                <ul>
                                    <li className="pack-include"><ion-icon name="checkmark-outline"></ion-icon>
                                        Podrán contratar las consultas que consideren necesarias para resolver dudas o hacer ajustes.
                                    </li>  
                                </ul>
                            </div>
                        </div>
                    </div> 
                    
                </section>
                </main>
        
            
            
            
            </body>
        );
    }
}

export default Packs;