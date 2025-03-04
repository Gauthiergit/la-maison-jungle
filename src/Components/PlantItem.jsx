import CareScale from './CareScale'
import "../styles/PlantItem.css"

function PlantItem({name, cover, id, light, water, price}){
	return(
		<li key={id} className="lmj-plant-item">
			<img src={cover} alt={name} className='lmj-plant-item-cover' onClick={() => handleClick(name)}/>
			{name}
			<span className='lmj-plant-item-price'>{price}€</span>
			<CareScale careType='water' scaleValue={water} />
			<CareScale careType='light' scaleValue={light} />
		</li>
	)
}

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

export default PlantItem