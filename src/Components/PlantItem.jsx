import CareScale from './CareScale'
import "../styles/PlantItem.css"

function PlantItem({name, cover, id, light, water, price}){

	return(
		<li key={id} className="lmj-plant-item">
			<img src={cover} alt={name} className='lmj-plant-item-cover'/>
			{name}
			<span className='lmj-plant-item-price'>{price}€</span>
			<CareScale careType='water' scaleValue={water} />
			<CareScale careType='light' scaleValue={light} />
		</li>
	)
}

export default PlantItem