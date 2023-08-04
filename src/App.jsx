import './App.css';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from './components/Global/Navbar';
import { MainPage } from './components/MainPage/MainPage';
import { EditQuizPage } from './components/QuizPage/EditQuizPage';

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
      {/* Navbar heredado en todas las vistas */}
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='quiz/' element={<EditQuizPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
