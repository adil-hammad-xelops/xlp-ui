import './App.css'
import {Badge} from './components/Badge'
import {XlpButton} from "./components/Button";

function App() {

    return (
        <>
            <XlpButton size="md" variant="solid" colorScheme="teal">
                Xlp Btn Powered by Chakra
            </XlpButton>

            <Badge colorPalette='red'>failure</Badge>
        </>
    )
}

export default App
