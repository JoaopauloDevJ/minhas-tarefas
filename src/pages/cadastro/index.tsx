import BarraLateral from '../../Containers/Barra-lateral'
import Formulario from '../../Containers/formulario'

const CadastraTarefa = () => (
  <>
    {/* barra lateral */}
    <BarraLateral mostraFiltros={false} />

    <Formulario />
  </>
)

export default CadastraTarefa
