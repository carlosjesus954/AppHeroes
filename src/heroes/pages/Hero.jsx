import React from 'react'
import { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'
// import HeroCard from '../components/HeroCard'

export const Hero = () => {
  const {id, ...rest} = useParams()
  const hero =  useMemo(() => getHeroById(id), [id]) 
  const navigate = useNavigate();
  const handleReturn = () => {
          hero.publisher==='DC Comics'?navigate('/dc'):navigate('/marvel');
      }
  if(!hero){
    return <Navigate to='/marvel' />
  }
  return (
    <div className='Hero-container'>
        <div className="Hero-cards animate__animated animate__pulse">
          <img src={`/src/assets/${id}.jpg`} alt={hero.superhero} className="Hero-img"/>
          <div className="Hero-text">
            <h3 className="Hero-h3">{hero.superhero}</h3>
            <h4 className="Hero-h4">{hero.alter_ego}</h4>
            <p className="Hero-p">{hero.publisher}</p>
            <p className="Hero-p">{hero.first_appearance}</p>
            <p className="Hero-p"> Characters: {hero.characters}</p>

            <button className="Hero-btn" onClick={handleReturn} >Regresar</button>
          </div>
        </div>
    </div>
  )
}
