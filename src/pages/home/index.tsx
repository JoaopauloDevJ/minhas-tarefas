import BotaoAdicionar from '../../Components/botaoAdicionar'
import BarraLateral from '../../Containers/Barra-lateral'
import ListaDeTarefas from '../../Containers/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostraFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
