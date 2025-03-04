import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import Categories from "./Categories"
import PlantItem from "./PlantItem"
import { useState } from "react"

function ShoppingList({ cart, updateCart }) {

	const [selectedCategories, updateCategories] = useState([])

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories selectedCategories={selectedCategories} updateCategories={updateCategories} />
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price, category}) => (
					!selectedCategories.length || selectedCategories.includes(category) ? (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter</button>
						</div>
					) : null
				))}
			</ul>
		</div>
	)
}

export default ShoppingList