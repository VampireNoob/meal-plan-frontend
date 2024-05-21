// um bestimmte icons zu verwenden, wie in diesem fall, so instalieren wir mit "npm install react-icons --save" das
// tool und verwenden dann die dazu passenden (auf der seite zu findenden) tags durch, durch den prop
// "updatingInInput" verbinden wir die logik aus "App.js" mit unserem "icon" dass, wenn wir draufklicken, dann
// können wir die änderungen vornehmen
import { RiEditLine, RiDeleteBin6Line } from "react-icons/ri";

export const MyMeals = ({ text, updatingInInput, deleteMeal}) => {
    return(
        <div>
            <p>{ text }</p>
            <RiEditLine onClick={updatingInInput} />
            <RiDeleteBin6Line onClick={deleteMeal} />
        </div>
    )
}