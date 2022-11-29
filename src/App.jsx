import { useEffect, useState } from 'react';
import { Header } from './components/Header/header';
import { Main } from './components/Header/Main/main';

import "./global.css"

export function App() {

  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}
