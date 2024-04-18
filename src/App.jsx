import { useState } from 'react';
import './App.css';
import { PuffLoader } from 'react-spinners';

function App() {
  const memories = [
    {
      image: "images/1.png",
      caption: "Nós bem bebes em um momento de carinho."
    },
    {
      image: "images/2.png",
      caption: "Você e o Heitorzinho fazendo careta."
    },
    {
      image: "images/3.png",
      caption: "Um final de ano bem gostoso com minha vida."
    },
    {
      image: "images/4.png",
      caption: "CUIDADO! Allanis no volante!"
    },
    {
      image: "images/5.jpg",
      caption: "Só a loira mais linda do mundo!"
    },
    {
      image: "images/8.png",
      caption: "Uma foto bem conceitual."
    },
    {
      image: "images/9.png",
      caption: "Ai que friozinho bom!"
    },
    {
      image: "images/10.png",
      caption: "Heitor curtindo com o Cunhadinho."
    },
    {
      image: "images/11.png",
      caption: "Um dos nossos primeiros jantares em familia! E a Lolo já no grude."
    },
    {
      image: "images/12.png",
      caption: "Esse acampamento teve varias emoções!"
    },
    {
      image: "images/13.png",
      caption: "Um casamento bem controverso rs."
    },
    {
      image: "images/14.png",
      caption: "Essa é da epóca que eu ia na sua casa escondido."
    },
    {
      image: "images/15.png",
      caption: "Você com a mamis."
    },
    {
      image: "images/16.png",
      caption: "Você com a sogrinha."
    },
    {
      image: "images/17.png",
      caption: "Passeio com os tios e primos!"
    },
    {
      image: "images/18.png",
      caption: "AMO essa fotinho!"
    },
    {
      image: "images/19.png",
      caption: "Nessa epóca eu já não sabia tirar fotos com você."
    },
    {
      image: "images/20.png",
      caption: "Fotinho com o Margarida!"
    },
    {
      image: "images/21.png",
      caption: "Você e o Assunção nessa viagem top!"
    },
    {
      image: "images/22.png",
      caption: "Fotinho nossa no Costão do Santinho!"
    },
    {
      image: "images/23.png",
      caption: "Lembrança do Cristo no Rio!"
    },
    {
      image: "images/24.png",
      caption: "Pose no corcovado!"
    },
    {
      image: "images/25.png",
      caption: "ALERTA DE FOTO ZOADINHA!"
    },
    {
      image: "images/26.png",
      caption: "ROCK IN RIO!!!!!!"
    },
    {
      image: "images/27.png",
      caption: "Café da manhã especial com os tios!"
    },
    {
      image: "images/28.png",
      caption: "MAD IN BRAZZA 2022 (Esse foi o bom)"
    },
    {
      image: "images/29.png",
      caption: "Sogra e nora bem lindas!"
    },
    {
      image: "images/30.png",
      caption: "NUTELINHAAAAAAA!"
    },
    {
      image: "images/31.png",
      caption: "Como você tava maravilhosa nessa dia meu deusssss!"
    },
    {
      image: "images/32.png",
      caption: "Casamento do Gio e Amanda! Você tava linda demais."
    },
    {
      image: "images/33.png",
      caption: "Essa eu desenterrei."
    }
  ];
  
  const [memoryIndex, setMemoryIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [lastIndex, setLastIndex] = useState(null); // Armazena o índice da última imagem mostrada

  const handleMemoryChange = () => {
    setLoading(true);
    setTimeout(() => {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * memories.length);
      } while (memories.length > 1 && newIndex === lastIndex); // Garante que a nova imagem não seja a mesma que a última, se houver mais de uma imagem
      setMemoryIndex(newIndex); 
      setLastIndex(newIndex); // Atualiza o último índice usado
      setLoading(false);
    }, 1000); // Simula um delay para carregar
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Relembre um Momento</h1>
        {loading ? (
          <div className="loading-container">
            <PuffLoader color="#d63384" size={150} />
          </div>
        ) : (
          <div className="photo-frame">
            <img src={memories[memoryIndex].image} alt="Memory" />
          </div>
        )}
        <p>{loading ? "Carregando..." : memories[memoryIndex].caption}</p>
        <button onClick={handleMemoryChange}>Relembrar Momento</button>
      </header>
    </div>
  );
}

export default App;
