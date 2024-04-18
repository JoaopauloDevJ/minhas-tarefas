import { useDispatch, useSelector } from 'react-redux'
import FiltraCard from '../../Components/FiltraCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'
import * as enums from '../../Uilts/enums/Tarefa'
import { Campo } from '../../styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alteraTermo(evento.target.value))}
        />
        <S.Filtro>
          <FiltraCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legenda="Pendentes"
          />
          <FiltraCard
            valor={enums.Status.CONCLUIDA}
            criterio="status"
            legenda="Concluídas"
          />
          <FiltraCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="Urgentes"
          />
          <FiltraCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="Importantes"
          />
          <FiltraCard
            valor={enums.Prioridade.NORMAL}
            criterio="prioridade"
            legenda="Normal"
          />
          <FiltraCard criterio="todas" legenda="Todas" />
        </S.Filtro>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
