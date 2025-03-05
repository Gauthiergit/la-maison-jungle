import "../styles/Modal.css"; // Importation du fichier CSS

function Modal({ isOpen, onClose, name, water, light}) {
	const level = {1: "peu", 2: "modérément", 3: "beaucoup"}

	return (
		<div className={`modal-overlay ${isOpen ? "show" : ""}`} onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<h2>{name}</h2>
				<p>Cette plante a besoin de {level[water]} d'eau et {level[light]} de soleil.</p>
				<button onClick={onClose}>Fermer</button>
			</div>
		</div>
	);
}

export default Modal

