import AppHeader from "../AppHeader/AppHeader";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { MainPage, ComicsPage, Page404, ComicPage} from "../pages"



const App = () => {
    return (
        <Router>
                <div className="app">
                <AppHeader/>
                <main>
                    <Routes>
                        <Route path='/' element={<MainPage/>}/>
                        <Route path='/comics' element={<ComicsPage/>}/>
                        <Route path='*' element={<Page404/>}/>
                        <Route path='/comics/:id' element={<ComicPage/>}/>
                    </Routes>
                </main> 
            </div>
        </Router>
    )
    
}

export default App