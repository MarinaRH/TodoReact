import React, { Component } from 'react';

class Cards extends Component {
  constructor(props) {
    super(props);
    this.cards = ['och', 'och', 'cua', 'cua', 'onc', 'onc', 'sie', 'sie'];
    this.tempCheckArr = [];
    this.state = {
      image: Array(this.cards.length).fill('hidden'),
      divClick: true,
      compareImg: [],
      counter: 0
    }   
    this.checkMatch = this.checkMatch.bind(this);
  }

  //imagenes random con componente de react
  componentWillMount() {
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    shuffleArray(this.cards);
  }
  

  //Match
  checkMatch(key, e) {
    this.tempCheckArr.push(key.toString());

    // Cree una copia de compareImg y agregue imgsrc para compararlo luego
    const imgSrc = e.target.firstChild.src;
    const compareImg = [...this.state.compareImg];
    compareImg.push(imgSrc);
    const arr = this.state.image
    arr[key] = 'visible';

  
    this.setState({
      image: arr,
      compareImg: compareImg,
      counter: this.state.counter + 1
    });

    //Verifique si se hacen clic en 2 elementos; se desactive haciendo clic
    if (this.state.counter % 2) {
      this.setState({
        divClick: false
      });
      //Verifique si las imágenes coinciden
      if (compareImg[0] === compareImg[1]) {
        this.tempCheckArr = [];
        this.setState({
          compareImg: [],
          divClick: true
        });
      } else {
        //Si las imágenes no coinciden, vuélvalas a ocultar
        var tempArr = this.state.image
        var firstElement = parseInt(this.tempCheckArr[0]);
        var secondElement = parseInt(this.tempCheckArr[1]);
        setTimeout(()=>{
          tempArr[firstElement] = 'hidden';
          tempArr[secondElement] = 'hidden';
          this.tempCheckArr = [];
          this.setState({
            image: tempArr,
            compareImg: [],
            divClick: true
          })
        }, 700)
      }
    }
  }
  
  render() {
    return(
      <div>
        {this.cards.map((text, i) => {
          return (
            <div key={i} className="cards" onClick={this.state.divClick ? (e) => this.checkMatch(i, e) : undefined}>
              <img style={{visibility: this.state.image[i]}} src={text + '.jpg'} />
            </div>
          )
        })}
      </div>
    )}
}



export default Cards;