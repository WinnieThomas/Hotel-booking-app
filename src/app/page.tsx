import Home from '@/components/home';

const getRooms = async() =>{
    const res = await fetch('http://localhost:3000/api/rooms',{
        cache: 'no-cache'
    });
    return res.json;
}

export default async function HomePage() {
    const rooms = await getRooms();
    return <Home/>
 
}
