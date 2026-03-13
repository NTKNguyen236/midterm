// src/components/NewRelease.jsx
import React from 'react';

export default function NewRelease({ movies, onSelectMovie }) {
  return (
    <div className="new-release-section">
      <h3>New Release</h3>
      <div className="movie-grid">
        {movies.map((movie) => (
          <div 
            key={movie.id} 
            className="movie-card" 
            onClick={() => onSelectMovie(movie)} // Gọi hàm truyền từ props khi Click
          >
            <div className="img-container">
               <img src={movie.image} alt={movie.movieName} />
               <div className="episode-badge">Episode {movie.episode}</div>
            </div>
            <h4>{movie.movieName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}