import { Route,Switch } from 'react-router-dom';
import { Layout } from './hoc/Layout';
import { About } from './pages/About/About';
import { Cart } from './pages/Cart/Cart';
import { Catalog } from './pages/Catalog/Catalog';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';

function App() {
  
  return (
    <Layout>
      <Switch>
        <Route path = "/" component = { Home } exact/>
        <Route path = '/catalog' component = { Catalog } exact/>
        <Route path = '/cart' component = { Cart } />
        <Route path = '/catalog/:category/:id' component = {ProductDetail}/>
        <Route path = '/about' component = {About} />
      </Switch>
    </Layout>
  );
}

export default App;


