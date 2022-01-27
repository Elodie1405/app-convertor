import './App.css'

import React, { Component } from 'react';
import Input from './components/Input';
import Footer from './components/Footer';
import Header from './components/Header';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { weight: '', unit: 'k' }; // valeur que l'on va taper
    this.handleKilosChange = this.handleKilosChange.bind(this);
    this.handlePoundsChange = this.handlePoundsChange.bind(this);
  }
 //  kilos -> to lbs (pounds)
  converter(weight, convertMethod) {
    // je transforme la string weight en chiffre
    const inputValue = parseFloat(weight);

    //si ce n'est pas un chiffre, je ne fais pas de conversion, je retourne du vide
    if(Number.isNaN(inputValue)){
      return '';
    }

    const result = convertMethod(inputValue); // appel toKilos ou toPounds
    const roundedResult = Math.round(result, 2); // arrondi a deux chiffres

    return roundedResult.toString();

  }

  handleKilosChange(value){
    console.log(value); // permet de voir dans la console ce que l'on tape
    this.setState({ unit : 'l', weight : value }); 
  }

  handlePoundsChange(value){
    console.log(value); // permet de voir dans la console ce que l'on tape
    this.setState({ unit : 'k', weight : value }); 
  }

toKilos(lbs){
  return lbs * 0.45;
}

toLbs(kilos){
  return kilos * 2.2
}

  render() {

    const weight = this.state.weight;
    const unit = this.state.unit;
  
    const kilos = unit == 'k' ? this.converter(weight, this.toKilos) : weight;
    // si l'unit est k, on veut convertir en kilos donc on convertie sinon on reste en kilos et on donne le weight
    const pounds = unit == 'l' ? this.converter(weight, this.toLbs) : weight;
    // on definie la constante pour le calcul


    return (
    <div className='convertor'>
    <Header />
    <Input weight={kilos} unit='Kilos' onWeightChange={this.handleKilosChange}/>
    <Input weight={pounds} unit='Pounds' onWeightChange={this.handlePoundsChange} // va prendre en compte la constante pounds 
    />
    <Footer kilos={kilos}/>
    </div> 
    )
    

    
    

}

}
