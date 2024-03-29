import React from 'react'
import styled from 'styled-components'
import { Pergunta } from './Pergunta'

const Etapa2Container = styled.div``

const Etapa2Botao = styled.button `
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 15px;
`

export class Etapa2 extends React.Component {
  constructor(props) {
    super(props)
    this.curso = ""
    this.unidadeDeEnsino = ""
    this.state = {
      erroDoCurso: "",
      erroDaUnidadeDeEnsino: "",
    }
  }

  atualizarCurso = (curso) => { this.curso = curso }
  atualizarUnidadeDeEnsino = (unidadeDeEnsino) => { this.unidadeDeEnsino = unidadeDeEnsino }

  aoClicarNoProximo = () => {
    if(this.curso && this.unidadeDeEnsino) {
      if(this.props.aoClicarEmEnviar) {
        this.props.aoClicarEmEnviar({
          curso: this.curso,
          unidadeDeEnsino: this.unidadeDeEnsino
        })
      }
    } else {
      if(!this.curso) {
        this.setState({erroDoCurso: "Preencha seu curso"})
      } else {
        this.setState({erroDoCurso: ""})
      }

      if(!this.unidadeDeEnsino) {
        this.setState({erroDaUnidadeDeEnsino: "Preencha sua unidade de ensino"})
      } else {
        this.setState({erroDaUnidadeDeEnsino: ""})
      }
      window.alert("Preencha todas as perguntas da ETAPA 2 antes de prosseguir!")
    }
    
  }

  render = () => {
    return (
      <Etapa2Container>
        <h3> <b> ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR </b> </h3>
        <Pergunta
          onChange={ this.atualizarCurso }
          titulo={"5. Qual curso?"}
          mensagemDeErro = { this.state.erroDoCurso }
        />
        <br/>
        <Pergunta
          onChange={ this.atualizarUnidadeDeEnsino }
          titulo={"6. Qual a unidade de ensino?"}
          mensagemDeErro = { this.state.erroDaUnidadeDeEnsino }
        />
        <br/>
        <Etapa2Botao onClick = { this.aoClicarNoProximo }> Finalizar </Etapa2Botao>
      </Etapa2Container>
    )
  }
}