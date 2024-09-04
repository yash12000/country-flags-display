import React, { useEffect, useState } from 'react';
import CountryCard from './components/CountryCard';
import './styles.css';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://xcountries-backend.azurewebsites.net/all');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCountries();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="country-list">
            {countries.map(country => (
                <CountryCard key={country.name} country={country} />
            ))}
        </div>
    );
};

export default App;
