import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/TopRatedMovie';
import {Alert} from 'bootstrap'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/reponsive';


const TopRatedMovieSlide = () => {
  const {data, isLoading, isError, error } = useTopRatedMoviesQuery()
  if(isLoading){
    return <h1>Loading....</h1>
  }
  if(isError){
    return <Alert variant="danger">{error.message }</Alert>
  }
  return (
    <div>
      <MovieSlider title='Top Rated Movies' movies={data?.results} responsive={responsive}/>
    </div>
  )
}

export default TopRatedMovieSlide
