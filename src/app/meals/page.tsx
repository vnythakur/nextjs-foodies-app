import Link from "next/link";
import React from "react";

const Meals = () => {
    return (
        <>
            <ul>
                <li>
                    <Link href="/meals/share">Meal Share</Link>
                </li>
                <li>
                    <Link href="/meals/2">Meal 2</Link>
                </li>
            </ul>
        </>
    );
};

export default Meals;
