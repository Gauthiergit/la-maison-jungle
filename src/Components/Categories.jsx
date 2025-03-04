import { plantList } from "../datas/plantList"
import '../styles/Categories.css'

function Categories({selectedCategories, updateCategories}){
	
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addCategorie(categorie) {
		if (!selectedCategories.includes(categorie)) {
			updateCategories([...selectedCategories, categorie])
		}
	}

	function removeCategorie(categorie) {
		const filteredCategories = selectedCategories.filter(
			(cat) => cat !== categorie
		)
		updateCategories(filteredCategories)
	}


	return (
		<div className='lmj-categories'>
			<p>Filtrer</p>
			<select
				value={selectedCategories}
				onChange={(e) => addCategorie(e.target.value)}
				className='lmj-categories-select'
			>
				<option key="default-cat" value="default" >---</option>
				{categories.map((cat) => (
					<option key={cat} value={cat} >{cat}</option>
				))}
			</select>
			<div>
				{selectedCategories.map((cat) => (
					<div key={cat}>
						{cat}
						<button onClick={() => removeCategorie(cat)}>Retirer</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Categories