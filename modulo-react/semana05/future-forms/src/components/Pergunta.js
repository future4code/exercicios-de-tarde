import React from 'react'
import styled from 'styled-components'

const PerguntaContainer = styled.div `
  display: inline-block;
  text-align: start;
`

const PerguntaInput = styled.input`
  width: 100%;
`

const PerguntaSelect = styled.select`
  width: 100%;
`

const PerguntaError = styled.p `
  color: red;
`

export class Pergunta extends React.Component {

  constructor(props) {
    super(props) 
    this.state = {
      value: ""
    }
  }

  aoResponder = (e) => {
    if(this.props.tipo === "selecao") {
      const finalValue = e.target.value || this.props.options[0]
      this.setState({ value: finalValue})
      this.props.onChange(finalValue)
    }else {
      this.setState({ value: e.target.value })
      this.props.onChange(e.target.value)
    }
  }

  geraPerguntaAberta = (titulo) => {
    return (
      <PerguntaContainer>
        <p> { titulo } </p>
        <PerguntaInput onChange = { this.aoResponder } />
      { this.props.mensagemDeErro && (<PerguntaError> { this.props.mensagemDeErro } </PerguntaError>) }
      </PerguntaContainer>
    )
  }

  geraPerguntaComSelecao = (titulo, options = ["oi"]) => {
    return (
      <PerguntaContainer>
        <p> { titulo } </p>
        <PerguntaSelect onChange = { this.aoResponder }>
          {
            options.map((op, i) => {
              return <option key={ i } value={ op }> { op } </option>
            })
          }
        </PerguntaSelect>
        { this.props.mensagemDeErro && (<PerguntaError> { this.props.mensagemDeErro } </PerguntaError>) }
      </PerguntaContainer>
    )
  }

  render = () => {
    if(this.props.tipo === "selecao") {
      return this.geraPerguntaComSelecao(this.props.titulo, this.props.opcoes)
    }
    return this.geraPerguntaAberta(this.props.titulo)
  }
}