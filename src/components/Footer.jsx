
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="footer-copy">© {new Date().getFullYear()} Максим Остапчук</span>
        <div className="footer-socials">
          <a href="https://github.com/Reshatel" target="_blank" rel="noreferrer">
            <img 
              src="https://cdn.simpleicons.org/github/FF8C00" 
              alt="GitHub" 
              width="24" 
              height="24" 
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
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
    </footer>
  );
}
