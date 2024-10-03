import React from 'react';
import { Twitter, Instagram } from 'lucide-react';

// Importa las imágenes
import mainImage          from './images/b2c_main.jpeg';
import roadMapImage       from './images/b2ch_roadmap.jpeg';
import makeHistoryImage   from './images/b2c_make_hoistory.jpeg';
import news1Image from './images/image_1.jpeg';
import news2Image from './images/image_2.jpg';
import news3Image from './images/image_3.jpg';
import news4Image from './images/image_4.jpg';

const App = () => {
  // Array de noticias con imágenes importadas
  const newsItems = [
    { title: "Gran Maestro gana torneo", desc: "Victoria sorprendente en el Campeonato Mundial", image: news1Image },
    { title: "Nuevo récord de partida más larga", desc: "Partida dura más de 20 horas en torneo local", image: news2Image },
    { title: "IA revoluciona estrategias de ajedrez", desc: "Nuevas tácticas descubiertas por inteligencia artificial", image: news3Image }
  ];
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-teal-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
          Bet2Chess
          </a>
          <nav className="flex items-center space-x-4">
            <a href="https://example.com/game" className="bg-teal-600 hover:bg-teal-800 text-black font-bold py-2 px-4 rounded transition duration-300">
              GO TO CHESS!!!
            </a>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">CHESS HUB</a></li>
            </ul>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">Bienvenido a Bet2Chess</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full items-center">
              <p className="mb-4">Tu destino para apuestas de ajedrez y noticias del mundo del ajedrez.</p>
              <a href="https://example.com/game" className="block text-center">
                <div className="flex justify-center w-full">
                  <img 
                    src={mainImage}
                    alt="Jugar Bet2Chess" 
                    className="w-1/2 h-auto rounded-lg shadow-lg hover:opacity-60 transition duration-300"
                  />
                </div>
                <p className="mt-2 text-lg font-semibold">¡Juega ahora y pon a prueba tus habilidades!</p>
              </a>
            </div>
          </div>       
        </section>
        {/*SUMARY*/}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">SUMARY</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full items-center">
              <p className="mb-4">
              Bet2Chess is a game built on the Vara Network blockchain, where players can enjoy thrilling chess
              matches while earning VARA tokens. Users can also place bets on ongoing matches, creating an
              interactive and exciting gaming experience. We chose Vara Network for its advanced technology, which
              includes Signless Transaction and Payless Transaction, significantly enhancing the user experience.
              </p>
            </div>
          </div>       
        </section>
        <section>
          <div className="flex justify-center items-center ">
            <div className="w-1/2">
              <table className="w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="border p-4 text-2xl font-bold bg-teal-800 hover:text-gray-300">Current Challenges</td>
                    <td className="border p-4 text-2xl font-bold bg-teal-800 hover:text-gray-300">Our Solution</td>
                  </tr>
                  <tr>
                    <td className="border p-4 text-1xl bg-teal-800 hover:text-gray-300">
                      Chess played online and traditionally does not offer
                      financial incentives that are attractive to all players,
                      limiting the excitement and interaction in the game.
                    </td>
                    <td className="border p-4 text-1xl bg-teal-800 hover:text-gray-300">
                      Bet2Chess is a platform that allows users to play chess
                      and earn VARA tokens, as well as participate in bets on
                      active games, offering a unique and exciting gaming
                      experience.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>        
        <section className="mb-8">  
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full items-center">
              <p className="mb-4"></p> {/*empty line*/}
              <p className="mb-4">
              At Bet2Chess, we are passionate about chess, and our goal is to empower chess players to have fun
              and earn rewards for doing what they love
              </p>
            </div>
          </div>       
        </section>
        {/*GET TO KNOW BET2CHESS*/}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">GET TO KNOW BET2CHESS</h2>
          <h2 className="text-base text-left font-bold">Why Did We Choose Vara Network?</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full items-center">
              <p className="mb-4 text-left">
              Chess is a strategic game that requires the best moves and strategies to succeed. Therefore, we
              decided to build this project using only the best, cutting-edge technology that allows us to create what
              chess and its players truly deserve.
              </p>
            </div>
          </div>  

          <h2 className="text-base text-left font-bold">Virtues of Vara Network that Enhance Bet2Chess:</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full items-center">
              <p className="mb-4 text-left">
              There are two virtues of Vara Network that motivated us to build this project there: Payless Transactions
              and Signless Transactions. These features improve player interaction with our platform by eliminating
              the current barriers in Web3 games.
              </p>
            </div>
          </div>  

          <h2 className="text-base text-left font-bold">Our Key Features:</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full items-center">
              <div className="mb-4 text-left">
                <ul className="list-disc pl-5 space-y-y">
                  <li className="text-gary-700"> Play and Win: Participate in chess games and earn VARA tokens.</li>
                  <li className="text-gary-700"> Bet on Matches: Place bets on ongoing matches and earn additional rewards.</li>
                  <li className="text-gary-700"> Advanced Technology: Benefit from the speed and efficiency of Vara Network for an exceptional user experience.</li>
                </ul>
              </div>
            </div>
          </div>  

          <p className="mb-4"></p> {/*empty line*/}
          <p className="mb-4"></p> {/*empty line*/}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-teal-800">
            <div className="w-full items-center">
              <p className="mb-4 text-1xl">
              Chess is more than just a game; it is an intellectual pastime that has a touch of art and a
              lot of science. It is also a means of social and intellectual engagement.
              </p>
              <p className="mb-4 text-2xl hover:text-gray-300">José Raul Capablanca</p>
            </div>
          </div>  
          
        </section>



      </main>
      <footer className="bg-teal-600 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2024 Bet2Chess. Todos los derechos reservados.</p>
          <div className="flex space-x-4">
            <a href="https://x.com/bet2chess" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Twitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://www.instagram.com/bet2chess.oficial?igsh=MWg4ZG1qaDdpNGZjaA==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Instagram />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
