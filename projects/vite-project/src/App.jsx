import './App.css'
import { FollowCard } from "./FollowCard.jsx";
import RelojDigital from './RelojDigital';
import AyudaFormulario from './NuevoFormulario';
// import RelojA from './RelojA';
// import NuevoCurso from './NuevoCurso';


export function App () {
const userNameArroba = (userName) => `@${userName}`

    return (
        <div>
            {/* <NuevoCurso /> */}
            {/* <RelojA /> */}
            <AyudaFormulario />
            <RelojDigital />
            <section className='App'>
                <FollowCard 
                formatUserName={userNameArroba}
                userName="elonmusk" 
                name="Ibai Llanos" 
                />

                <FollowCard 
                formatUserName={userNameArroba} 
                userName="EvilAFM" 
                name="AlexelCapo" 
                />

                <FollowCard 
                formatUserName={userNameArroba} 
                userName="elonmusk" 
                name="Elon Musk" 
                />
            </section>
        </div>
    )
}

export default App;