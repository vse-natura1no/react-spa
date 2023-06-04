import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

export default function Category() {
    const { name } = useParams()
    const [meals, setMeals] = useState([])
    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals))
    }, [name])

    return <>
        <button className="btn deep-purple accent-2" onClick={goBack}>Go back</button>
        {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
}