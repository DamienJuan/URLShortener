import * as React from 'react';

import { useEffect, useState } from 'react';
import axios from 'axios';

const API = 'https://icanhazdadjoke.com/';
const headers = {accept: 'application/json'};

interface Joke {
  id: string;
  joke: string;
  status: number;
}

const Jokes: React.FC<void> = () => {
  
  const [joke, setJoke] = useState<string>('');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get<Joke>(API, {headers})
         .then((res) => {
      	   // {id: "...", joke: "..", status: 200}
      	   if (res.data.joke) setJoke(res.data.joke);
    	 });
  }, [counter]);
  
  
  return (
    <span style={{ fontSize:'2rem', fontWeight:'bold'}}>
    { joke ?? <>{joke}</>}
	<br/>
    <button onClick={() => setCounter(counter +1)}>Click me</button>
    </span>
  );
}

export default Jokes;
