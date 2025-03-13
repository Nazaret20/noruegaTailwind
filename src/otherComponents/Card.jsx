const Card = ({ day, description, imageSrc, imageAlt }) => {
	return (
		<div className="card snap-x snap-mandatory">
			<h4 className="text-header font-bold no-scrollbar">{day}</h4>
			<p className="py-3">{description}</p>
			<img src={imageSrc} alt={imageAlt || "Imagen de card"} className=" w-full" />
		</div>
	);
};

export default Card;
