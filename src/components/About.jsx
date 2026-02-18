import "./About.css";

export default function About({ handleButtonClick }) {
  return (
    <section className="about">
      <div className="container">

      {/* HERO */}
<div className="about-hero">
  <h2>
    Pixel<br />
    Playground
  </h2>
  <p>
    Основа для сучасних інтерфейсів із чистою архітектурою,
    швидкістю та візуальною виразністю.
  </p>
  <button className="about-btn" onClick={handleButtonClick} >Стартуємо!</button>
</div>


        {/* SECTION 1 */}
        <div className="about-section">
          <div className="about-text">
            <span className="label">01 · Архітектура</span>
            <h3>Продумана структура</h3>
            <p>
              Компонентний підхід, масштабованість і логіка,
              що дозволяє розвивати продукт без технічного боргу.
            </p>
            <button className="about-btn" onClick={handleButtonClick}>Дізнатись більше</button>
          </div>

          <div className="about-image large">
            <img
              src="/undraw_setup_fzje.svg"
              alt="Architecture Illustration"
            />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="about-section reverse">
          <div className="about-text">
            <span className="label">02 · Performance</span>
            <h3>Швидкість і легкість</h3>
            <p>
              Vite забезпечує миттєвий dev-сервер, а React
              дозволяє створювати плавні й живі інтерфейси. <br />
              Додатково: оптимізовані компоненти, lazy-loading та кешування ресурсів.
            </p>
          <div className="social-links">
  <a href="https://github.com/Reshatel" target="_blank" rel="noreferrer">
    <img 
      src="https://cdn.simpleicons.org/github/FF8C00" 
      alt="GitHub" 
      width="24" 
      height="24" 
    />
  </a>
  <a href="https://instagram.com/" target="_blank" rel="noreferrer">
    <img 
      src="https://cdn.simpleicons.org/instagram/FF8C00" 
      alt="Instagram" 
      width="24" 
      height="24" 
    />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer">
    <img 
      src="https://cdn.simpleicons.org/x/FF8C00" 
      alt="Twitter/X" 
      width="24" 
      height="24" 
    />
  </a>
</div>

          </div>

          <div className="about-image small">
            <img
              src="/undraw_to-the-stars_tz9v.svg"
              alt="Performance Illustration"
            />
          </div>
        </div>

        {/* SECTION 3 */}
<div className="about-section">
  <div className="about-text">
    <span className="label">03 · Creative Tools</span>
    <h3>Інструменти та практики</h3>
    <p>
      Я використовую сучасні бібліотеки та підходи, щоб створювати
      плавні та адаптивні інтерфейси. Від фреймворків до дизайнерських
      систем - усе для максимального комфорту розробки.
    </p>
    <div className="tag-cloud">
      <span>React</span>
      <span>Vite</span>
      <span>Figma</span>
      <span>Three.js</span>
      <span>Framer Motion</span>
      <span>Storybook</span>
    </div>
  </div>

  <div className="about-image medium">
    <img
      src="/undraw_java-script-frameworks_i8a4.svg"
      alt="Creative Tools Illustration"
    />
  </div>
</div>

{/* SECTION 4 - Project Showcase */}
<div className="about-section showcase-section">
  <h2>Про цей проект</h2>
  <p>Я створив демонстраційний сайт, який показує можливості сучасного React та інтерактивного UI.</p>

  <div className="showcase-cards">
    <div className="showcase-card">
      <img src="/undraw_design-thinking_8qg2.svg" alt="Інтерактивність" />
      <h3>Інтерактивність</h3>
      <p>
        Кожна кнопка, картка та елемент на сторінці реагує на користувача.
        Використані модалки, hover-ефекти та анімації для живого UX.
      </p>
    </div>

    <div className="showcase-card">
      <img src="/undraw_spreadsheets_bh6n.svg" alt="Технології" />
      <h3>Технології</h3>
      <p>
        Сайт створено на React + Vite, використовуються фреймворки для анімацій
        (Framer Motion),та сучасний CSS для адаптивності.
      </p>
    </div>

    <div className="showcase-card">
      <img src="/undraw_winter-designer_a6kq.svg" alt="Дизайн" />
      <h3>Дизайн</h3>
      <p>
        Усі елементи створені так, щоб бути одночасно стильними та функціональними та виглядало як щось схоже на справжній проєкт :).
      </p>
    </div>
  </div>
</div>
       
   <div className="about-author">
  <div className="author-item">
    <span className="label">Created by</span>
    <strong>Максим Остапчук</strong>
  </div>

  <div className="author-item">
    <span className="label">Illustrations</span>
    <a
      href="https://undraw.co/search/design"
      target="_blank"
      rel="noreferrer"
      className="author-link"
    >
      undraw.co →
    </a>
  </div>

  <div className="author-item">
    <span className="label">GitHub</span>
    <a
      href="https://github.com/Reshatel"
      target="_blank"
      rel="noreferrer"
      className="author-link"
    >
      <img 
        src="https://cdn.simpleicons.org/github/FF8C00" 
        alt="GitHub" 
        width="24" 
        height="24" 
      />
      github.com/Reshatel →
    </a>
  </div>
</div>



      </div>
    </section>
  );
}
