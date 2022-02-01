import './App.css'
import SayMayName from './components/SayMayName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


function App () {
  return (
    <div className="App">
      <Frase/>
      
      <SayMayName name="Dutra"/>
      <Pessoa
        nome="Dutra" 
        idade="32"
        profissao="Programador" 
        foto="https://avatarfiles.alphacoders.com/240/240880.jpg"
      />
      <List/>
    </div>
  )
}
export default App;