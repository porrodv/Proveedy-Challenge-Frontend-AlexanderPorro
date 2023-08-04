import '../../css/MainPage.css';
import yachaiLaptopPNG from '../../assets/images/yachai-laptop.png';
import { InfoCard } from './InfoCard';

export function MainPage () {
  return (
    <>
      <div id='main-page'>
        <section className='header'>
          <article className='left'>
            <h1>Ya no abandones los estudios por falta de tutor</h1>
            <h4>Servicio de tutoria académica personalizada</h4>
            <p>
              Convierte con facilidad cualquier video, documento o URL en un
              curso interactivo con asistente inteligente. Perfecto para
              empresas, profesionales y estudiantes.
            </p>
            <p className='remarked'>Potenciado por inteligencia artificial</p>

            <div className='btns'>
              <button id='create-tutor'>Crea un tutor gratis</button>
              <a id='know-more' type='button' href='#'>
                Saber más <i className='fa-solid fa-arrow-right' />
              </a>
            </div>
          </article>
          <aside className='right'>
            <img src={yachaiLaptopPNG} alt='yachAI laptop image' />
          </aside>
        </section>

        <section className='cards'>
          <p>Usa inteligencia artificial para mejorar tu aprendizaje.</p>
          <InfoCard
            title='Sube tu información'
            description='Educativa, procesa PDF, MP4, MP3. Crear tu libreria de documentos que alimenaran a tu tutor inteligente.'
            iconClass='fa-regular fa-file-lines'
          />
          <InfoCard
            title='Generación de ficha'
            description='Resumen con palabras clave, puntos clave, resumen y capítulos recomendados para un fácil aprendizaje.'
            iconClass='fa-solid fa-folder-closed'
          />
          <InfoCard
            title='Tutor virtual'
            description='Crea cuestionarios para facilitar el aprendizaje y responde en base al contenido académico generado.'
            iconClass='fa-solid fa-robot'
          />
        </section>
      </div>
    </>
  );
}
