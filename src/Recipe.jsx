import Styles from './recipe.module.css'
const Recipe = ({image, label,calories,ingredients}) =>{
    return <div className={Styles.recipe}>
        <h1>{label}</h1>
        <h2>{Math.round(calories,2)}k/cal</h2>
        <img src={image} className={Styles.image}/>
        <ul>
        {ingredients.map((item,idx) => <li key={idx}>{item.text}</li>)}
        </ul>
    </div>
}

export default Recipe