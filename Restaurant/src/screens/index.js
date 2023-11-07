import Home from './Home'
import Categories from './Categories'
import Search  from './Search'
import Products from './Products'
import ProductDetails from './ProductDetails'
import ProductsMenu from './ProductsMenu'
import MostFavorites from './MostFavorites'
import I1 from '../../assets/images/01.png'
import I2 from '../../assets/images/02.png'
import I3 from '../../assets//images/04.png'
import I4 from '../../assets//images/05.png'
import d1 from '../../assets/images/d1.jpg'
import d2 from '../../assets/images/d2.jpg'
import d3 from '../../assets/images/d3.jpg'
import d4 from '../../assets/images/d4.jpg'
import d5 from '../../assets/images/d5.jpg'
import d6 from '../../assets/images/d6.jpg'
import f1 from '../../assets/images/f1.jpg'
import f2 from '../../assets/images/f2.jpg'
import f3 from '../../assets/images/f3.jpg'
import f4 from '../../assets/images/f4.jpg'
import nakaya from '../../assets/images/nakaya.jpg'
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Budget Me food 1',
      image:I1,
      price:53,
      status:'available',
      category:'food'
    },
    {
        id: 'bd7acbea-c1b1-467c2-aed5-3ad53abb28ba',
        title: 'Budget Me food 2',
        image:I2,
        price:12,
        status:'available',
        category:'food'
      },
      {
        id: 'bd7acbea-c1ub1-46c2-aed5-3ad53abb28ba',
        title: 'Budget Me',
        image:I4,
        price:53,
        status:'available',
        category:'food'
      },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91kgjkgjaa97f63',
      title: 'Cocacola 1',
      image:d1,
      price:5,
      status:'available',
      category:'drinks'
    },
    {
        id: '3ac68afc-c605-418d3-a4f8-fbd91aa97f63',
        title: 'Drink 2',
        image:d2,
        price:10,
        status:'available',
        category:'drinks'
      },
      {
        id: '3ac68afc-c605-48d13-a4f8-fbd91aa97f63',
        title: 'Budget  drinks 3',
        image:d3,
        price:5.3,
        status:'available',
        category:'drinks'
      },
      {
        id: '3ac68afc-c605-48fdd3-a4f8-fbd91aa97f63',
        title: 'Budget  drinks 4',
        image:d4,
        price:5.6,
        status:'available',
        category:'drinks'
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Drinks 5',
        image:d5,
        price:43,
        status:'available',
        category:'drinks'
      },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Budget Meals fruits 1',
      image:f1,
      price:30,
      status:'available',
      category:'fruits'
    },
    {
      id: '58694a0f-3da1-471futhttyf-bd96-145571e29d72',
      title: 'Budget  fruits 2',
      image:f2,
      price:32,
      status:'available',
      category:'fruits'
    },
    {
        id: '58694a0f-3da1-4721futhttyf-bd96-145571e29d72',
        title: 'Budget  fruits 3',
        image:f3,
        price:32,
        status:'available',
        category:'fruits'
      },
      {
        id: '58694a0f-433da1-471futhttyf-bd96-145571e29d72',
        title: 'Budget  fruits 4',
        image:f4,
        price:32,
        status:'available',
        category:'fruits'
      },
    
  ];
  
const myColor="#0E94A0"
export {
    Home,
    Categories,
    Search,
    Products,
    ProductDetails,
    ProductsMenu,
    myColor,
    MostFavorites,
    I1,I2,I3,I4,d1,d2,d3,d4,d5,d6,f1,f2,f3,f4,nakaya,
    DATA
    
}