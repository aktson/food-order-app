import MealItem from "./MealItem"

const fakeMeals = [
    {
        id: 1,
        name: "Fried Potatoes",
        description: "Finest fish and veggies",
        price: 12.99
    },
    {
        id: 2,
        name: "Barbeque Steak",
        description: "Barbeque marinated porky",
        price: 32.99
    },
    {
        id: 3,
        name: "Roasted Chicken",
        description: "chicken slow roasted with ingredients",
        price: 25.99
    },
    {
        id: 4,
        name: "Paneer curry",
        description: "Indian speciality",
        price: 18.99
    }
]

function MealsData() {

    const mealsList = fakeMeals.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />)
    return (
        <ul>{mealsList}</ul>
    )
}

export default MealsData;