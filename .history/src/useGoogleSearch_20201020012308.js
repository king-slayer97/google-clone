import {useState,useEffect} from 'react'
import API_KEY from './keys'

const CONTEXT_KEY = 'f6ef7f0474116a5ed'

const useGoogleSearch = (term) => {
    const [data,setData] = useState(null);
    useEffect(() =>{
        const fetchData = async() => {
            fetch(``)
        }
    },[term])
}

export default useGoogleSearch
