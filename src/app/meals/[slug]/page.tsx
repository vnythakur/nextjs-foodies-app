import React from "react";

type MealProps = {
    params: {
        slug: string;
        [key: string]: any; // Define more specific type if known
    };
};

const Meal: React.FC<MealProps> = ({ params }) => {
    return <div>Meal {params.slug}</div>;
};

export default Meal;
