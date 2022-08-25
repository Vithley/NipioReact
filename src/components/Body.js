import React, {Component} from "react";
import nina from '../assets/images/nina.png';
import familia from '../assets/images/familia.png';
import siguenos from '../assets/images/siguenos.png';
import quienes from '../assets/images/QUIÉNES SOMOS.png';
import terapia from '../assets/images/TerapiaEnFamilia.png';
import juego from '../assets/images/LOGOPEDIA A TRAVÉS DEL JUEGO.png';
import web from '../assets/images/FOTOS WEB principal.png';
import 'bootstrap/dist/css/bootstrap.css';
import Cards from "./Cards";
import SliderHome from "./SliderHome";

class Body extends Component {

    render() {

        return(
        <div>
           
            <SliderHome/>
        
            <div className="container text-center mt-5">
                <div className="row">
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-6 consiste-logopedia">
                    <h2>¿En qué consiste la Logopedia Online?</h2>
                    </div>
                    <div className="col-md-auto"></div>
                    <div className="col parr-consiste">
                    <p className="text-justify">Ni Pío Logopedia está diseñado para ofrecer Servicio de Logopedia Online,
                        somos conscientes que los peques cuando están en su hogar y en familia,
                        obtienen mejores resultados, que otros métodos de trabajos individuales. 

                        Nuestro método se basa en la inclusión de la familia como motor de la terapia.
                        
                        Tras una entrevista inicial online y recogida de información. Valoramos el tipo
                        de intervención que más se ajuste a cada peque. Y establecemos un horario de seguimiento
                        que mejor se adapte a la rutina familiar.</p>
                    </div>
                </div>
                
            </div>

            <div class="container index-photo mt-5">
            <div class="row container-galery justify-content-between">
                <div class=" col-xs-2 col-md-5 col-lg-4 pack ">
                    <img src={nina} className="img-fluid" alt="niña" width='100%'/>
                    <div className="overlay">
                            <a href="/packs">PACK DE LOGOPEDIA</a>
                        </div>
                </div>
                <div class="col-xs-2 col-md-5 col-lg-4 pack">
                    <img src={familia} alt="" className="img-fluid"/>
                    <div className="overlay">
                            <a href="/packs">PACK DE LOGOPEDIA</a>
                    </div>
                </div>
                <div class="col-xs-2 col-md-5 col-lg-4 pack">
                    <img src={siguenos} alt="" className="img-fluid"/>
                    <div className="overlay">
                            <a href="/packs">PACK DE LOGOPEDIA</a>
                    </div>
                </div>
           

            </div>
        </div>

        <div className="container text-center mt-5">
                <div className="row">
                    <div class="col-xs-12 col-sm-12 col-md-8 col-lg-6 consiste-logopedia">
                    <h2>¿En qué consiste la Logopedia Online?</h2>
                    </div>
                    <div className="col-md-auto"></div>
                    <div className="col parr-consiste">
                    <p className="text-justify">Ni Pío Logopedia está diseñado para ofrecer Servicio de Logopedia Online,
                        somos conscientes que los peques cuando están en su hogar y en familia,
                        obtienen mejores resultados, que otros métodos de trabajos individuales. 

                        Nuestro método se basa en la inclusión de la familia como motor de la terapia.
                        
                        Tras una entrevista inicial online y recogida de información. Valoramos el tipo
                        de intervención que más se ajuste a cada peque. Y establecemos un horario de seguimiento
                        que mejor se adapte a la rutina familiar.</p>
                    </div>
                </div>
                
            </div>
            
    
            <section className="beneficios">
                <div className="parr-ben">
                    <ul>
                        <li>Proximidad: No necesitas desplazarte a ningún centro físico, podemos intervenir desde casa.</li>
                        <li>Adaptabilidad: Poseemos mayor flexibilidad horaria, sin necesidad de ser en horario extraescolar.</li>
                        <li>Eficiencia: Las dudas se resuelven de forma rápida y satisfactoria</li>
                        <li>Proximidad: La Logopeda tiene contacto directo con padres e hijos.</li>
                        <li>Personalizado: Los objetivos y actividades de intervención son prácticos y lúdicos, teniendo siempre en cuenta los intereses de los peques.</li>
                        <li>Comprensión: Esta intervención está basada en el apego y el respeto a los niños y sus familias.</li>
                    </ul>
                </div>
                <div className="benef-logopedia">
                    <h2>¿Qué  beneficios tiene la terapia online?</h2>
                </div>
            
            </section>

            <Cards/>
            
            <section className="galery">
                <div className="icons-galery">
                    <div className="icons">
                        <a href="quienesSomos.php"><img src={quienes} alt=""/></a>
                        <h2>Quienes Somos</h2>
                        <p>Nuestro equipo está formado por logopedas y psicólogas especializadas en el habla, lenguaje y comunicación.
                        Trabajamos de forma interdisciplinar para adaptarnos mejor a las necesidades de cada familia.</p>
                    </div>
                    
                    <div className="icons">
                        <a href="/equipo"><img src={terapia} alt=""/></a>
                        <h2>Terapia en familia</h2>
                        <p>El objetivo principal de nuestra terapia es empoderar a las familias con instrucciones,
                        estrategias y actividades para llevar a cabo los objetivos establecidos en el plan de intervención individualizado de cada peque.</p>
                    </div>
                    
                    <div className="icons">
                    <a href="/#"><img src={juego} alt=""/></a>
                    <h2>Logopedia a través del juego</h2>
                        <p>El juego en familia es la clave de nuestra intervención, todos los objetivos de rehabilitación logopédica se abordarán de forma lúdica,
                        teniendo muy en cuenta los intereses del peque.</p>
                    </div>
                    
                </div>
            </section>
            <section className="frase">
                <p>"Jugar es la forma favorita de nuestro cerebro para aprender"<br/> Diane Ackerman.</p>
            </section>
            <section className="video-index">
                <video src="./assets/videos/presentacion youtube Ni Pío_Logopedia.mp4" controls width="50%" height="50%"></video>
            </section>
            <section className="imagen-final">
                <a href="materiales.php"><img src={web} width="50%" height="50%" alt=""/></a>
            </section>
        </div>
        );
    }
}

export default Body;