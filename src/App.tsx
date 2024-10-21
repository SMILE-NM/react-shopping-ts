import { useState } from 'react';
import { useQuery } from 'react-query';

//Components
import Drawer from '@material-ui/core';
import LinearProgress from '@material-ui/core';
import Grid from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons';
import Badge from '@material-ui/core';

//Styles
import { Wrapper } from './App.styles';

//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: string;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products ')).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts,
  );
  console.log(data);
  return <div className="App">start</div>;
};

export default App;
