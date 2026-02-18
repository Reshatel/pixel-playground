import { useState } from "react";
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import './App.css'; // підключаємо глобальні стилі, якщо потрібно

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  // Загальний обробник для всіх кнопок
  const handleButtonClick = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="app">
      {/* Header, About та Footer */}
      <Header />
      <About handleButtonClick={handleButtonClick} /> {/* передаємо обробник в About */}
      <Footer />

      {/* Модальне вікно */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Упс…</h2>
            <p>
              Жодна кнопка не працює.. <br />
              По умовах завдання ми робимо лише одну сторінку :)
            </p>
            <button className="modal-close" onClick={closeModal}>Закрити</button>
          </div>
        </div>
      )}
    </div>
  );
}
