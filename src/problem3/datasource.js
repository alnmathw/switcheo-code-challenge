// your code here:
/* import fetch */
import fetch from "node-fetch";
class Price {

  /* deconstruct the data values of a given price */
  constructor(price) {
    this.buy = price.buy;
    this.sell = price.sell;
    this.pair = price.pair;
  }
  /* create the method to obtain the mid price */
  mid = () => {
    return (this.buy + this.sell) / 2 / 100;
  }

  /* create the method to obtain the currency quote */
  quote = () => {
    return this.pair.substring(3);
  }

};

/* Define getPrices */
class Datasource {

  async getPrices() {
    const response = await fetch('https://static.ngnrs.io/test/prices'); // from problem statement
    const data = await response.json(); // convert to json 
    const dataPrice = await data.data.prices.map((price) => {
      return new Price(price) // extract desired information 
    })
    return dataPrice // return data 
  }
  
};

var ds = new Datasource;

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.error(error);
    });