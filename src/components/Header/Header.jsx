import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#inicio" aria-label="Lista de Tarefas, início">
          <span className="site-header__brand-mark" aria-hidden="true">
            LT
          </span>
          <span>Lista de Tarefas</span>
        </a>
        <nav className="site-header__nav" aria-label="Navegação principal">
          <a href="#tarefas">Minhas tarefas</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
