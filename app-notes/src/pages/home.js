import { useContext } from 'react';
import { context } from '../context/authContext';


export default function Home () {

    const authContext = useContext(context)
    console.log(authContext);
    return (
        <div>
        HOMES</div>
    )
    
}
