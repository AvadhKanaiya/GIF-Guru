import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const Tag = () => {

  const [tag, setTag] = useState();

  const { gif, loading, fetchGif } = useGif(tag);


  function generateRandomGif() {
    fetchGif(tag);
  }

  function promptGif(event) {
    setTag(event.target.value);
  }
  return (
    <div className='w-1/2 bg-[#AEE6E6] rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} GIF</h1>
      {
        loading ? (<Spinner />) : (<img src={gif} alt="random_gif" width="450" />)
      }

      <input type="text" className='w-9/12 text-lg rounded-lg mb-[3px] py-2 text-center'
        onChange={promptGif}
        value={tag}
        placeholder='Generate what you want..😁'
      />
      <button className='w-9/12 bg-white py-2 text-lg rounded-lg mb-[20px]' onClick={generateRandomGif}>Genrate</button>
    </div>
  )
}

export default Tag;