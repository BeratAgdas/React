import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [episodes, setEpisodes] = useState([]); // Bölüm verilerini tutmak için state at


  useEffect(() => {
    // API'ye GET isteği gönderme
    const fetchData = async () => {
      const response = await axios.get('https://rickandmortyapi.com/api/episode');//url değişebilir
      setEpisodes(response.data.results); // Gelen verileri state'e kaydetme
    };

    fetchData(); // Fonksiyonu çalıştır
  }, []); // Boş bağımlılık dizisi: Fonksiyon sadece ilk renderda çalışır

  return (

    
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
      {episodes.map((episode) => (
        <div key={episode.id}>
          <h2>{episode.name}</h2>
          <p>{episode.air_date}</p>
        </div>
      ))}
    </div>
      <h1>KONUŞARAK ÖĞREN STAJ PROJESİ</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
