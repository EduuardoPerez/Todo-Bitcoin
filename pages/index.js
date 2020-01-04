import MasterPage from './components/Master';
import Precio from './components/Precio';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
  <MasterPage>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2>Precio del Bitcoin</h2>
            <Precio
              precio={props.precioBitcoin}
            />
        </div>
        <div className="col-8">
          <h2>Noticias  sobre Bitcoin</h2>
        </div>
        <div className="col-4">
          <h2>Próximos eventos sobre Bitcoin</h2>
        </div>
      </div>
    </div>
  </MasterPage>
)

// Once the component is loaded, it make the query to the API and save it like props
Index.getInitialProps = async () => {
  const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
  const resPrecio = await precio.json();  
  return {
    precioBitcoin: resPrecio.data.quotes.USD
  }
}

export default Index;
