import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Random = () => {

    const { gif, loading, fetchGif } = useGif()


    function generateRandomGif() {
        fetchGif();
    }
    return (
        <div className='w-1/2 bg-[#FFA45B] rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='mt-[15px] text-2xl uppercase font-bold'>A Random GIF</h1>
            {
                loading ? (<Spinner />) : (<img src={gif} alt="random_gif" width="450" />)
            }
            <button className='w-9/12 bg-white py-2 text-lg rounded-lg mb-[20px]' onClick={generateRandomGif}>Genrate</button>
        </div>
    )
}

export default Random