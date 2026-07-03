// Supabase importieren - ersetzt axios und das komplette Backend!
import { createClient } from '@supabase/supabase-js';

// Verbindung zu Supabase herstellen - ersetzt die MongoDB Verbindung
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// GET - alle Mahlzeiten aus der Supabase Datenbank laden
// ersetzt: axios.get("https://meal-plan-1tu8.onrender.com")
const getAllMeals = async (setMeals) => {
    const { data } = await supabase
        .from('meals')
        .select('*');
    setMeals(data || []);
}

// POST - neue Mahlzeit in Supabase speichern
// ersetzt: axios.post(".../saveMeals")
const addMeal = async (title, setTitle, setMeal) => {
    await supabase
        .from('meals')
        .insert([{ title }]);
    setTitle('');
    getAllMeals(setMeal);
}

// EDIT - Mahlzeit in Supabase ändern, sucht über "id" das richtige Objekt
// ersetzt: axios.post(".../editMeal")
const editMeal = async (mealId, title, setTitle, setMeal, setEditing) => {
    await supabase
        .from('meals')
        .update({ title })
        .eq('id', mealId);
    setTitle('');
    setEditing(false);
    getAllMeals(setMeal);
}

// DELETE - Mahlzeit aus Supabase löschen, sucht über "id" das richtige Objekt
// ersetzt: axios.post(".../deleteMeal")
const deleteMeal = async (_id, setMeal) => {
    await supabase
        .from('meals')
        .delete()
        .eq('id', _id);
    getAllMeals(setMeal);
}

export { getAllMeals, addMeal, editMeal, deleteMeal };