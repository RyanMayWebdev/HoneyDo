import './App.css';
import Header from './Components/Header';
import List from './Components/List';

function App() {
    return (
        <div className="App">
            <Header/>
            <main>
                <List title={'To Do'}/>
                <List title={'In Progress'}/>
                <List title={'Completed'}/>
            </main>
        </div>
    );
}

export default App;
