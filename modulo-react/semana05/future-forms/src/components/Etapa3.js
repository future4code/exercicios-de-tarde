import React from 'react'
import styled from 'styled-components'
import { Pergunta } from './Pergunta'

const Etapa3Container = styled.div``

const Etapa3Botao = styled.button `
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 15px;
`

export class Etapa3 extends React.Component {
  constructor(props) {
    super(props)
    this.terminarEnsinoSuperior = ""
    this.cursoComplementar = "Curso técnico"
    this.state = {
      erroDeTerminarEnsinoSuperior: "",
      erroDeCursoComplementar: "",
    }
  }

  atualizarTerminarEnsinoSuperior = (terminarEnsinoSuperior) => { this.terminarEnsinoSuperior = terminarEnsinoSuperior }
  atualizarCursoComplementar = (cursoComplementar) => { this.cursoComplementar = cursoComplementar }

  aoClicarNoProximo = () => {
    if(this.terminarEnsinoSuperior){
      if(this.props.aoClicarEmEnviar) {
        this.props.aoClicarEmEnviar({
          terminarEnsinoSuperior: this.terminarEnsinoSuperior,
          cursoComplementar: this.cursoComplementar
        })
      }
    } else {
      if(!this.terminarEnsinoSuperior) {
        this.setState({erroDeTerminarEnsinoSuperior: "Preencha o motivo de não ter terminado o ensino superior"})
      } else {
        this.setState({erroDeTerminarEnsinoSuperior: ""})
      }

      if(!this.cursoComplementar) {
        this.setState({erroDeCursoComplementar: "Selecione uma opção quanto a curso complementar"})
      } else {
        this.setState({erroDeCursoComplementar: ""})
      }

      window.alert("Preencha todas as perguntas da ETAPA 3 antes de prosseguir!")
    }
  }

  render = () => {
    return (
      <Etapa3Container>
        <h3> <b> ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO </b> </h3>
        <Pergunta
          onChange={ this.atualizarTerminarEnsinoSuperior }
          titulo={ "5. Por que você não terminou um curso de graduação?" }
          mensagemDeErro = { this.state.erroDeTerminarEnsinoSuperior }
        />
        <br/>
        <Pergunta
          onChange={ this.atualizarCursoComplementar }
          titulo={"6. Você fez algum curso complementar?"}
          tipo={"selecao"}
          opcoes={
            ["Curso técnico",
              "Cursos de inglês",
              "Não fiz nem curso complementar"]
          }
          mensagemDeErro = { this.state.erroDeCursoComplementar }
        />
        <br/>
        <Etapa3Botao onClick = { this.aoClicarNoProximo }> Finalizar </Etapa3Botao>
      </Etapa3Container>
    )
  }
}