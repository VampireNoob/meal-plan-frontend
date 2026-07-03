import './App.css';
import { MyMeals } from './MyMeals';
import { addMeal, deleteMeal, editMeal, getAllMeals } from './FetchMeals';
import { useEffect, useState } from 'react';

function App() {
  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState('');
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");

  // Load all meals from Supabase on initial render
  useEffect(() => {
    getAllMeals(setMeal)
  }, [])

  // Populate the input field with the selected meal's data for editing
  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }

  return (
    <div className='box'>
      <h1>MEAL PLAN</h1>

      <input
      type="text"
      placeholder="Add a Meal"
      value={ title }
      onChange={(e) => setTitle(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter" && title) {
          editing ? editMeal(mealId, title, setTitle, setMeal, setEditing) : addMeal(title, setTitle, setMeal)
        }
      }}
      />

      {/* Toggles between adding a new meal and saving an edit, depending on "editing" state */}
      <button disabled={!title} onClick=
      {editing ? () => editMeal(mealId, title, setTitle, setMeal, setEditing) : () => addMeal(title, setTitle, setMeal)}>
        {editing ? "EDIT" : "ADD"}
      </button>

      {myMeal.map((meal) => <MyMeals text={meal.title} key={meal.id} 
      updatingInInput={() => updatingInInput(meal.id, meal.title)}
      deleteMeal={() => deleteMeal(meal.id, setMeal)} />)}
    </div>
  );
}

export default App;