import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  const [texto, setTexto] = useState('')
  const [tarefas, setTarefas] = useState([])
  const [proximoId, setProximoId] = useState(1)
  function adicionarTarefa(evento) {
    evento.preventDefault()
    const novaTarefa = texto.trim()
    if (novaTarefa === '') {
      return
    }
    setTarefas([
      ...tarefas,
      {
        id: proximoId,
        texto: novaTarefa,
        concluida: false,
      },
    ])
    setProximoId(proximoId + 1)
    setTexto('')
  }
  function alternarConcluida(id) {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa,
      ),
    )
  }
  function excluirTarefa(id) {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }
  return (
    <div className="app-shell" id="inicio">
      <Header />
      <Main
        texto={texto}
        aoAlterarTexto={setTexto}
        aoAdicionarTarefa={adicionarTarefa}
        tarefas={tarefas}
        aoAlternarConclusao={alternarConcluida}
        aoExcluirTarefa={excluirTarefa}
      />
      <Footer />
    </div>
  )
}

export default App
