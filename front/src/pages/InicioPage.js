import React from "react";
import '../style/pages/InicioPage.css'
import { Carrusel } from "../components/layout/Carrusel";

const InicioPage = (prop) =>{
    return(
        <main class="holderinicio">
        <div className="bienvenidos">
        <h2>Bienvenidos</h2>
        <p> Este espacio fue creado principalmente para personas de Latino América que disfrutan del maquillaje y lo
            vemos como un hobbie. Desde hace un tiempo el mundo del maquillaje se ha visto repleto de creadores de
            contenido de distintos paises, en general tomando la cabecera aquellos que pertenecen a Norte América. Vemos
            reseñas de productos que no se consiguen en donde vivimos, o tendencias que inclusive no son aplicables a
            nuestro contexto socio-cultural.</p>
        <p> En este blog trataremos de mantenernos atados a lo popular en nuestra región. Haremos reseñas de productos
            de facil adquicisión en nuestro territorio, podremos comentar acerca de los estilos que si se ocupan en
            nuestras tierras. La intención es que sea un espacio mas cercano a nuestra realidad, y así disfrutar de lo
            que nos gusta aqui y ahora. </p>
        <h3> Saludos desde Argentina, Pamela</h3>
        </div>
        <div className="Recomendaciones">
            <Carrusel/>
        </div>
    </main>
    );
}

export default InicioPage;