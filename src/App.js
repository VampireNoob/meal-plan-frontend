import './App.css';
import { MyMeals } from './MyMeals';
import { addMeal, deleteMeal, editMeal, getAllMeals } from './FetchMeals';
import { useEffect, useState } from 'react';

function App() {

// "maMeal" ist der ausgangszustand, sprich das was wir in den input eingeben und "setMeal" ist das was nach der
// eingabe abgebildet wird, durch "useEffect" verbinden wir das "setMeal" aus "FetchMeals" und kriegen zugang zu
// unseren daten aus dem backend
  const [myMeal, setMeal] = useState([]);
// dadurch griegen wir zugang zu unserem input wenn wir etwas eingeben wollen und verbinden es auch mit dem backend
// dann schreiben wir noch zwei sachen bei input unten durch "value und onChange" damit alles funktioniert
  const [title, setTitle] = useState('');
// hierdurch kriegen wir zugang um etwas zu ändern, mit "false" haben wir den ausgangszustand das es erstmal nichts
// zu korregieren gibt wenn nichts abgebildet wird, die zweite zeile ist dafür da damit das programm weiß was wir
// ändern wollen, bzw es gleicht die "id" ab und die übereinstimmt dann könne wir das ändern
  const [editing, setEditing] = useState(false);
  const [mealId, setMealId] = useState("");

  useEffect(() => {
    getAllMeals(setMeal)
  }, [])

// hier schreiben wir durch dass, wenn wir ein objekt ändern wollen und auf den stift klicken, so wird der text dann
// im "input" abgebildet und wir können die änderung vornehmen
  const updatingInInput = (_id, title) => {
    setEditing(true)
    setTitle(title)
    setMealId(_id)
  }

  return (
    <div className='box'>
      <h1>MEAL PLAN</h1>

{/* hier verbinden wir was wir oben beim zweiten "useState" durchgeschrieben haben wie "title und setTitle" */}
      <input
      type="text"
      placeholder="Add a Meal"
      value={ title }
      onChange={(e) => setTitle(e.target.value)}
      />

{/* hier verbinden die logik aus "Fetchmeals" mit dem knopf damit es die information hinzufügt und abspeichert,
wir verwenden den auch auch wenn wir objekte ändern, so soll es die änderung übernehmen, dafür verwenden wir den
"ternary operator" und die funktion "editMeal" um unsere objekte zu ändern, wichtig: die parameter müssen in der
gleichen reihenfolge aufgeschrieben sein wie in der datei "FetchMeals.js", es kann ein bug entstehen wenn im
inptfeld nichts aufgeschrieben wrid aber trotzdem auf "ADD" gedrückt word, denn können wir verhindern in dem wir
bei "button" noch einen kleinen zusatz "disabled={!title}" durchschreiben */}
      <button disabled={!title} onClick=
      {editing ? () => editMeal(mealId, title, setTitle, setMeal, setEditing) : () => addMeal(title, setTitle, setMeal)}>
        {editing ? "EDIT" : "ADD"}
      </button>

{/* dadurch kriegen wir zugang zu einzelnen objekten die wir dann eintragen, durch die zweite zeile können wir
die änderungen vornehmen an dem objekt was wir ausgesucht haben, die dritte zeile ist dann dafür da um das
gewünschte objekt zu löschen */}
      {myMeal.map((meal) => <MyMeals text={meal.title} key={meal._id} 
      updatingInInput={() => updatingInInput(meal._id, meal.title)}
      deleteMeal={() => deleteMeal(meal._id, setMeal)} />)}
    </div>
  );
}

export default App;