import React from 'react'
import { Pergunta } from './Pergunta'
import styled from 'styled-components'

const Etapa1Container = styled.div``

const Etapa1Botao = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 15px;
`

export class Etapa1 extends React.Component {
  constructor(props) {
    super(props)
    this.nome = ""
    this.idade = ""
    this.email = ""
    this.escolaridade = "Ensino Médio Incompleto"
    this.state = {
      erroDoNome: "",
      erroDaIdade: "",
      erroDoEmail: "",
      erroDaEscolaridade: ""
    }
  }

  atualizaNome = (nome) => { this.nome = nome }
  atualizaIdade = (idade) => { this.idade = idade }
  atualizaEmail = (email) => { this.email = email }
  atualizaEscolaridade = (escolaridade) => {
    console.log(escolaridade)
    this.escolaridade = escolaridade
  }

  aoClicarNoProximo = () => {
    if(this.nome && this.idade && this.email) {
      if (this.props.aoClicarEmEnviar) {
        this.props.aoClicarEmEnviar({
          nome: this.nome,
          idade: this.idade,
          email: this.email,
          escolaridade: this.escolaridade
        })
      }
    } else {
      if(!this.nome) {
        this.setState({ erroDoNome: "Preencha seu nome" })
      } else {
        this.setState({ erroDoNome: "" })
      }
      if(!this.idade) {
        this.setState({ erroDaIdade: "Preencha sua idade" })
      } else {
        this.setState({ erroDaIdade: "" })
      }
      if(!this.email) {
        this.setState({ erroDoEmail: "Preencha seu email" })
      } else {
        this.setState({ erroDoEmail: "" })
      }
      if(!this.escolaridade) {
        this.setState({ erroDaEscolaridade: "Escolha seu nível de escolaridade" })
      } else {
        this.setState({ erroDaEscolaridade: "" })
      }
      window.alert("Preencha todas as perguntas da ETAPA 1 antes de prosseguir!")
    }
  }

  render = () => {
    return (
      <Etapa1Container>
        <h3> <b> ETAPA 1 - DADOS GERAIS </b> </h3>
        <Pergunta
          onChange={this.atualizaNome}
          titulo={"1. Qual seu nome?"}
          mensagemDeErro = { this.state.erroDoNome }
        />
        <br />
        <Pergunta
          onChange={this.atualizaIdade}
          titulo={"2. Qual sua idade?"}
          mensagemDeErro = { this.state.erroDaIdade }
        />
        <br />
        <Pergunta
          onChange={this.atualizaEmail}
          titulo={"3. Qual seu email?"}
          mensagemDeErro = { this.state.erroDoEmail }
        />
        <br />
        <Pergunta
          onChange={this.atualizaEscolaridade}
          titulo={"4. Qual sua escolaridade?"}
          tipo={"selecao"}
          opcoes={
            ["Ensino Médio Incompleto",
              "Ensino Médio Completo",
              "Ensino Superior Incompleto",
              "Ensino Superior Completo"]
          }
          mensagemDeErro = { this.state.erroDaEscolaridade }
        />
        <br />
        <Etapa1Botao onClick={this.aoClicarNoProximo}> Continuar </Etapa1Botao>
      </Etapa1Container>

    )
  }
}