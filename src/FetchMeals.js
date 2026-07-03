import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

// Fetch all meals from the database
const getAllMeals = async (setMeals) => {
    const { data, error } = await supabase
        .from('meals')
        .select('*');
    if (error) {
        console.error('Error fetching meals:', error.message);
    }
    setMeals(data || []);
}

// Add a new meal
const addMeal = async (title, setTitle, setMeal) => {
    const { error } = await supabase
        .from('meals')
        .insert([{ title }]);
    if (error) {
        console.error('Error adding meal:', error.message);
    }
    setTitle('');
    getAllMeals(setMeal);
}

// Update an existing meal by id
const editMeal = async (mealId, title, setTitle, setMeal, setEditing) => {
    const { error } = await supabase
        .from('meals')
        .update({ title })
        .eq('id', mealId);
    if (error) {
        console.error('Error editing meal:', error.message);
    }
    setTitle('');
    setEditing(false);
    getAllMeals(setMeal);
}

// Delete a meal by id
const deleteMeal = async (_id, setMeal) => {
    const { error } = await supabase
        .from('meals')
        .delete()
        .eq('id', _id);
    if (error) {
        console.error('Error deleting meal:', error.message);
    }
    getAllMeals(setMeal);
}

export { getAllMeals, addMeal, editMeal, deleteMeal };