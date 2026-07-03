<h1 align="center">Meal Planer 🍽️</h1>

<p align="center">
    A simple Meal Planner App built with <a href="https://reactjs.org/">React</a> and <a href="https://supabase.com/">Supabase</a>
</p>

<img width="1805" height="888" alt="mealplan" src="https://github.com/user-attachments/assets/329240af-0ffa-4522-bc7d-70efb3e99875" />

## A simple web app to plan and manage your weekly meals.

You can view a live demo here: https://mealplaner.netlify.app/

## 🙂 Features:
- 🍽️ Add, edit and delete meals
- 💾 Data is stored permanently with Supabase
- 📱 Mobile friendly

## A piece of code – connecting to Supabase:
```javascript
const getAllMeals = async (setMeals) => {
    const { data } = await supabase
        .from('meals')
        .select('*');
    setMeals(data || []);
}
```

## Built With
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/c43e4d15-62e4-4254-a673-c4021fd4cf25" width="30"> React
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/e8f0b5ca-935a-45d1-b5c0-419f02ee83d4" width="30"> JavaScript
* Supabase
* HTML & CSS

## Contact
GitHub: [VampireNoob](https://github.com/VampireNoob)
