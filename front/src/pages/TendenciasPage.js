import React from "react";
import tendencias from "../components/layout/ImgTendencias";
import "../style/pages/TendenciasPage.css";

const TendenciasPage = (prop) => {
  return (
    <main>
      <div className="holder_tendencias">
        <h2>Tendencias en la ciudad</h2>
        <p>
          Las ultimas tendencias de hoy en dia vienen impulsadas por una fuerte
          globalización gracias a las redes sociales, las que se encuetran mas
          vigentes son aquellas que describiremos. Es muy importante tener en
          cuenta que cada maquillaje debe ser adaptado correctamente para la
          implementación en las distintas etnias, como lo somos nosotras las
          latinas. Esta descripción es meramente informativa, mas no detallada
          respecto a los aspectos que se deberan a tener en cuenta al seguir las
          distintas tendencias. Sin nada que agregar comenzamos a presentar las
          tendencias que son furor en las redes y en las calles.
        </p>
        <div className="distintas_tendencias">
          <h3>Douyin Make Up</h3>
          <p>
            Cualquier amante de la belleza en las redes sociales habrá
            encontrado el maquillaje de Douyin, ya sea que haya aparecido en su
            FYP o en la exploración de Pinterest. Este fenómeno del maquillaje
            explotó en la escena y capturó la atención de todos con su estilo y
            técnicas únicas, siendo la fuente de inspiración para muchos
            tutoriales de YouTube y looks de noche.
          </p>
          <p>
            Douyin es una plataforma de redes sociales de videos cortos
            originaria de China. A partir de ahí surgió el mundo del maquillaje
            Douyin, un estilo de maquillaje suave y etéreo que incorpora la
            delicada colocación de brillos, mejillas sonrosadas, pestañas
            agrupadas y otras características únicas. Inicialmente, este estilo
            se diseñó para halagar las características faciales de Asia
            Oriental, pero a medida que acumuló una base de fanáticos en todo el
            mundo, los usuarios adoptaron el maquillaje Douyin y lo hicieron
            suyo. El sentimiento original sigue siendo el mismo: el maquillaje
            Douyin está diseñado para realzar tu belleza natural y resaltar tus
            propias características.
          </p>
          <div className="img_conteiner">
            <img src={tendencias[0]} alt="douyin1" />
            <img src={tendencias[1]} alt="douyin2" />
            <img src={tendencias[2]} alt="douyin3" />
          </div>

          <h3>Clean Girl Make Up</h3>
          <p>
            Clean Girl Makeup es una tendencia de maquillaje que se ha vuelto
            viral en TikTok y que todas las chicas desean llevar. Se caracteriza
            por un estilo de maquillaje natural y fresco, que resalta la belleza
            de cada persona sin recargar demasiado los rasgos. A diferencia de
            otros estilos de maquillaje que buscan ocultar las imperfecciones,
            Clean Girl Makeup se enfoca en realzar la piel y lograr un aspecto
            luminoso y saludable.
          </p>
          <p>
            Los principales elementos que no pueden faltar en este tipo de
            maquillaje son una piel radiante y saludable, unos ojos sutiles en
            tonos neutros para dar profundidad a la miradam además de máscara de
            pestañas y unos labios natura en tonos nude o rosados suaves para
            resaltar el aspecto natural de los labios.
          </p>
          <div className="img_conteiner">
            <img src={tendencias[3]} alt="clean1" />
            <img src={tendencias[4]} alt="clean2" />
            <img src={tendencias[5]} alt="clean3" />
          </div>

          <h3>Dark Femenine Make Up</h3>
          <p>
            Este estilo de makeup es furor en las redes sociales y perfecto para
            lucirlo de noche.El Dark feminine, tiene como objetivo destacar la
            mirada y aunque el nombre suene a que los colores que se usarán en
            los ojos serán apagados, lo cierto es que se mezcla con sombras
            claras o con acabo brillante para lograr cierto matiz.Muchas
            celebridades como Billie Eilish suelen llevar un maquillaje dark
            feminine en importantes galas o alfombras rojas.
          </p>
          <p>
            Tal como dijimos, resalta la zona de los ojos por eso las cejas
            deben estar peinadas y pintadas al igual que las pestañas para
            lograr ese efecto llamativo de esa zona del rostro.Algo que tampoco
            puede faltar es un buen delineado ya sea con lápiz, sombra o fibra
            color negro y un labial nude en los labios complemente este estilo.
          </p>
          <div className="img_conteiner">
            <img src={tendencias[6]} alt="dark1" />
            <img src={tendencias[7]} alt="dark2" />
            <img src={tendencias[8]} alt="dark3" />
          </div>
          <h3>Corean Make Up</h3>
          <p>
            El maquillaje coreano se ha convertido en una tendencia global
            gracias a su enfoque en la belleza natural y la salud de la piel, la
            belleza coreana se centra en tener una piel saludable y radiante.
            Este estilo de maquillaje se centra en lograr un aspecto juvenil y
            fresco, a menudo denominado glass skin.
          </p>
          <p>
            Para la piel, en lugar de usar una base de maquillaje pesada, se
            opta por una de covertura ligera que permita igualar el tono de la
            piel y cubra pequeñas imperfecciones.En el estilo coreano a menudo
            se mantienen los ojos simples y naturales. El objetivo principal es
            hacer que los ojos parezcan más grandes y brillantes. A diferencia
            de las cejas arqueadas y definidas que son populares en otros
            estilos de maquillaje, el maquillaje coreano favorece las cejas
            rectas y suaves. Por otro lado, se caracteriza por lucir labios
            coloridos, pero de una manera muy sutil. La técnica del "labio
            mordido" es muy popular, donde el color se concentra en el centro de
            los labios y se desvanece hacia los bordes.
          </p>
          <div className="img_conteiner">
            <img src={tendencias[9]} alt="corean1" />
            <img src={tendencias[10]} alt="corean2" />
            <img src={tendencias[11]} alt="corean3" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TendenciasPage;
