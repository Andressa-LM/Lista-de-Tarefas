import './Main.css'

function Main({
  texto,
  aoAlterarTexto,
  aoAdicionarTarefa,
  tarefas,
  aoAlternarConclusao,
  aoExcluirTarefa,
}) {
  return (
    <main className="main-content">
      <section className="main-card" aria-labelledby="titulo-principal">
        <div className="main-card__intro">
          <p className="main-card__eyebrow">SEU ESPAÇO DE FOCO</p>
          <h1 id="titulo-principal">Minha Lista de Tarefas</h1>
          <p className="main-card__description">
            Organize estudos, trabalhos e revisões em um só lugar.
          </p>
        </div>

        <form className="task-form" onSubmit={aoAdicionarTarefa}>
          <label htmlFor="campo-tarefa">Nova tarefa</label>
          <div className="task-form__controls">
            <input
              id="campo-tarefa"
              type="text"
              value={texto}
              onChange={(evento) => aoAlterarTexto(evento.target.value)}
              placeholder="Ex.: Estudar para a prova de história"
            />
            <button type="submit">Adicionar tarefa</button>
          </div>
        </form>

        <section
          className="task-section"
          id="tarefas"
          aria-labelledby="titulo-tarefas"
          aria-live="polite"
        >
          <div className="task-section__heading">
            <h2 id="titulo-tarefas">Tarefas</h2>
            <span className="task-section__count">
              {tarefas.length} {tarefas.length === 1 ? 'tarefa' : 'tarefas'}
            </span>
          </div>

          {tarefas.length === 0 ? (
            <p className="task-list-empty">
              Sua lista está vazia. Adicione uma tarefa para começar.
            </p>
          ) : (
            <ul className="task-list">
              {tarefas.map((tarefa) => (
                <li
                  key={tarefa.id}
                  className={`task-list__item${tarefa.concluida ? ' task-list__item--completed' : ''}`}
                >
                  <label className="task-list__label">
                    <input
                      type="checkbox"
                      checked={tarefa.concluida}
                      onChange={() => aoAlternarConclusao(tarefa.id)}
                    />
                    <span>{tarefa.texto}</span>
                  </label>
                  <button
                    type="button"
                    className="task-list__delete"
                    aria-label={`Excluir tarefa: ${tarefa.texto}`}
                    onClick={() => aoExcluirTarefa(tarefa.id)}
                  >
                    Excluir
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </section>
    </main>
  )
}

export default Main
