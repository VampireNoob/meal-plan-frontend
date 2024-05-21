// hier verbinden wir unser "backend" mit unserem "frontend", dafür instalieren wir mit "npm i axios" das programm
// das uns erlaubt die beiden sachen zu verbinden und importieren es, mit "getAllMeals" was wir auch exportieren,
// kriegen wir zugang zu unserem server, wo alles abgespeichert wird, in diesem fall "localhost:7000"
import axios from "axios";

// als alternative schreibweise können wir das auch so schreiben nach dem wir ein link bei "render" erhalten haben:
// diesen link setzen wir unten bei der konstante ein:
// const myURL = "Link" 
// und dann diesen setzen wir diesen unten bei den "axios" zeilen folgendermassen auf:
// axios.get(`${myURL}`) bei get und beim rest durch / den namen der dafür zuständig is

// hier kriegen wir zugang zu unseren daten bei "localhost" und bilden die durch die methode "get" ab
const getAllMeals = (setMeals) => {
    axios.get("https://meal-plan-1tu8.onrender.com")
    .then(({ data }) => {console.log(data)
        setMeals(data);
    })
}

// hier schreiben wir die logig durch wenn wir etwas hinzufügen wollen, exportieren es und verbinden es mit dem
// "button" in "App.js" durch "addMeal", nicht vergessen unseren "localhost" einzugeben und den zusatzt, in diesem
// fall ist es "saveMeals" was wir bei dem backend unter "post" durchgeschrieben haben
const addMeal = (title, setTitle, setMeal) => {
    axios.post("https://meal-plan-1tu8.onrender.com/saveMeals", { title })
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllMeals(setMeal)
    })
}

// hier schreiben wir die logik durch wenn wir etwas in unserer liste ändern wollen:
// mealId = ist dafür da damit das programm weiß wo wir etwas ändern wollen
// setEditing = ist dafür da damit wir den text ändern können
const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
    axios.post("https://meal-plan-1tu8.onrender.com/editMeal", { _id: mealId, title })
    .then((data) => {
        console.log(data);
        setTitle("");
        setEditing(false);
        getAllMeals(setMeal)
    })
}

// hier schreiben wir logik durch wenn wir ein objekt löschen wollen, dafür verwenden wir bei "localhost" hinter
// der zahl denn namen der wir bei backend unter löschen bei "MealRoutes" verwendet haben und setzen es hier ein,
// dann gleichen wir es der id an, damit auch nur das gelöscht wird was wir nicht mehr haben möchten und bildet
// die restliche liste wieder ab, natürlich auch hier nicht vergessen es zu exportieren damit wir es in "App.js"
// importieren könne und auch die funktion da durchschreiben
const deleteMeal = (_id, setMeal) => {
    axios.post("https://meal-plan-1tu8.onrender.com/deleteMeal", { _id })
    .then((data) => {
        console.log(data)
        getAllMeals(setMeal)
    })
}

export { getAllMeals, addMeal, editMeal, deleteMeal };