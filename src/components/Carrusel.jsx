import Card from "../otherComponents/Card";

const images = [
	{
		src:
			"https://images.unsplash.com/photo-1551041061-2edc96ab9805?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Museo de Oslo",
        day: "Día 1",
        description: "Visita Oslo y sus museos",
	},
	{
		src:
			"https://images.unsplash.com/photo-1563796421467-037a8eeb9d9d?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Un barco en los fiordos de Noruega",
        day: "Día 2",
        description: "Ruta en barco Bergen-Flam"
	},
	{
		src:
			"https://images.unsplash.com/photo-1723921005360-cd6b390fb146?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Carretera atlántica de Noruega",
        day: "Día 3",
        description: "Cruza la carretera atlántica"
	},
	{
		src:
			"https://images.unsplash.com/photo-1593378026483-2a1fd46a35bd?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Auroras boreales en Noruega",
        day: "Día 4",
        description: "Vive una noche mágica"
	},
	{
		src:
			"https://plus.unsplash.com/premium_photo-1694475129483-a3462ec235fa?q=80&w=989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		alt: "Cabaña frente a un glaciar en Noruega",
        day: "Día 5",
        description: "Relajación total"
	},
];

const Carrusel = () => {
	return (
		<>
			<section id="itinerario" className="mt-40">
				<h3 className="font-bold text-4xl text-header text-center mb-8">Explora tu itinerario</h3>
				<section className="flex flex-wrap justify-center gap-5 py-10 px-2.5  max-w-4xl mx-auto">
					{images.map((item, index) => (
						<Card
                        key={index}
                        day={item.day}
                        description={item.description}
                        imageSrc={item.src}
                        imageAlt={item.alt}
                      />
					))}
				</section>
			</section>
		</>
	);
};

export default Carrusel;
