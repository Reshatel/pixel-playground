import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1 className="logo">Pixel Playground</h1>

        <nav className="nav-menu">
          <a href="#about">Проєкт</a>
          <a href="#tools">Інструменти</a>
          <a href="#contact">Контакти</a>
        </nav>


      </div>
    </header>
  );
}
