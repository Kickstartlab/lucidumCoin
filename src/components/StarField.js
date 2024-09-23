import React from 'react';

const StarField = () => {

    const generateStars = () => {
        const stars = [];
        for (let i = 0; i < 150; i++) {
            const top = Math.random() * 100;
            const left = Math.random() * 100;
            const duration = (Math.random() * 2) + 1.5;
            const delay = Math.random() * 5;

            stars.push({
                top: `${top}%`,
                left: `${left}%`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
            });
        }
        return stars;
    };

    const starsArray = generateStars();

    return (
        <div className="star-field">
            {starsArray.map((star, index) => (
                <div
                    key={index}
                    className="star"
                    style={{
                        top: star.top,
                        left: star.left,
                        animationDuration: star.animationDuration,
                        animationDelay: star.animationDelay,
                    }}
                ></div>
            ))}
        </div>
    );
};

export default StarField;
