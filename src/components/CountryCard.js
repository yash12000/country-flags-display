import React from 'react';

const CountryCard = ({ country }) => {
    return (
        <div className="country-card">
            <img src={country.flag} alt={`${country.name} flag`} className="country-flag" />
            <p className="country-name">{country.name}</p>
        </div>
    );
};

export default CountryCard;
