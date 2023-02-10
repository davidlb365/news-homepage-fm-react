import AppNews from "./components/AppNews"
import { NewsProvider } from "./context/NewsProvider"


function App() {
    
    return (
        <NewsProvider>
            <AppNews />
        </NewsProvider>
    )
}

export default App
