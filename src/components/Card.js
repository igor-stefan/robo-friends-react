import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className="tc bg-light-yellow dib br3 pa1 ma1 grow bw2 shadow-5">
            <img alt = 'robot' src={`https://robohash.org/${id}?size=220x220`}/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;