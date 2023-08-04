import { useEffect } from 'react';
import './App.css';
import { Question } from './components/Question';
import { Navbar } from './components/Navbar';
import questionsData from './data/questions.json';

function App () {
  const yachaiAPI = 'https://yachai.lat/documents/api/document/?test=true';
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkxMTI1NzEyLCJpYXQiOjE2OTEwMzkzMTIsImp0aSI6ImViMTI5YmRkNWQ1YjRlNGE4Njg1OGIxNGMxZTE2ZGIyIiwidXNlcl9pZCI6MX0.NraH4u5vDpBTEO2Nhc78HX3D5lAgwxzZZt-v7xVUGcw';

  async function getData (url) {
    try {
      const response = await fetch(url, {
        headers: { Authorization: 'Bearer ' + token }
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData(yachaiAPI);
  }, []);

  return (
    <>
      <Navbar />

      <div id='edit-quiz'>
        <h4 className='title'>Edit quiz</h4>
        <section className='edit-quiz-container'>
          <article id='left'>
            <div className='info'>
              <br />
              <p>Try an example: </p><p className='remarked'>Grandhi, Battle of Hastings</p>, <p>and</p> <p className='remarked'>technical documentation.</p>
            </div>

            <div className='quiz'>
              <header className='options'>
                <a href='#'>Text</a>
                <a href='#'>Topic</a>
                <a href='#'>URL</a>
                <a className='uploads' href='#'>
                  Uploads <i className='crown-icon fa-solid fa-crown' />
                </a>
                <a href='#'>Manual</a>
              </header>
              <hr className='custom-hr' />
              <br />
              <section className='text-option'>
                <p>Enter Your Text</p>
                <textarea name='text' id='text' cols='50' rows='6' />

                <div className='cbos'>
                  <select name='typeof' id='typeof' defaultValue='0'>
                    <option value='0' disabled>
                      Tipo de Quiz
                    </option>
                    <option value='1'>opcion 1</option>
                  </select>
                  <select name='lenguaje' id='lenguaje' defaultValue='0'>
                    <option value='0' disabled>
                      Lenguaje
                    </option>
                    <option value='1'>opcion 1</option>
                  </select>
                  <select name='difficulty' id='difficulty' defaultValue='0'>
                    <option value='0' disabled>
                      Dificultad
                    </option>
                    <option value='1'>opcion 1</option>
                  </select>
                  <select name='maxof' id='maxof' defaultValue='0'>
                    <option value='0' disabled>
                      Max de Quiz
                    </option>
                    <option value='1'>opcion 1</option>
                  </select>
                </div>

                <button id='generate-btn'>Generate</button>
              </section>
            </div>
          </article>

          <article id='right'>
            <header>
              <p>Texto</p>
              <div>
                <button>Show Answers</button>
                <select name='export' id='export' defaultValue='0'>
                  <option value='0' disabled>Export</option>
                  <option value='1'>PDF</option>
                </select>
              </div>
            </header>
            <article className='bubble'>
              <p>We've generated 5 questions for you bellow</p>
              <p>
                Upgrade to generate more questions, add up to 25,000 characters,
                upload files and export results.
              </p>
              <a href='#'>View Plans & Pricing</a>
            </article>

            <div className='questions-container'>
              {questionsData.map((question, index) => (
                <Question
                  key={index}
                  question={(index + 1) + '. ' + question.question}
                  options={question.options}
                />
              ))}
            </div>
          </article>

          <aside id='preferences'>
            <div className='preferences-inner'>
              <h6>PREFERENCES <i className='fa-regular fa-circle-question' /></h6>
              <hr className='custom-hr' />
              <a href='#'><i className='fa-solid fa-display' />Display</a>
              <hr className='custom-hr' />
              <a href='#'><i className='fa-solid fa-circle-notch' />Behaviour</a>
              <hr className='custom-hr' />
              <a href='#'> <i className='fa-solid fa-circle-exclamation' />Data Collection</a>
              <hr className='custom-hr' />
              <a href='#'><i className='fa-solid fa-table-list' />Summary</a>
            </div>
          </aside>
        </section>
      </div>

    </>
  );
}

export default App;
