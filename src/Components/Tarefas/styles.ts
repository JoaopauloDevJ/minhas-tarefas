import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../Uilts/enums/Tarefa'

type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametro: 'status' | 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return variaveis.laranja
  } else {
    if (props.status === enums.Status.PENDENTE) return variaveis.amarelo
    if (props.status === enums.Status.CONCLUIDA) return variaveis.verde
  }
  return '#ccc'
}

export const Card = styled.div`
  padding: 16px;
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 32px;
  border-radius: 16px;

  label {
    display: flex;
    align-itens: center;
    margin-bottom: 16px;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: #000;
  margin-left: 8px;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  background-color: ${(props) => retornaCorDeFundo(props)};
  font-weight: bold;
  font-size: 10px;
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  color: #8b8b8b;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 12px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
