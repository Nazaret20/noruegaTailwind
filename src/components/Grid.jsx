
const Grid = () => {
	return (
		<>
			<section className="max-w-5xl mx-auto mt-40">
				<h3 className="font-bold text-4xl text-header text-center mb-8">Descubre los paisajes icónicos de Noruega</h3>
				<p className="mb-12 max-w-4xl mx-auto">
					Noruega es un país de contrastes impresionantes, desde sus majestuosos fiordos hasta las espectaculares auroras
					boreales. En esta sección, vemos algunos de los destinos más emblemáticos que te cautivarán con su belleza natural.
					Prepárate para ser transportado a paisajes que parecen salidos de un sueño, donde cada rincón ofrece una nueva maravilla
					por descubrir.
				</p>
				<section id="destinos" className="max-w-4xl grid grid-cols-3 grid-rows-2 gap-5 mx-auto">
					<img src="./images/noruegaAurora.webp" alt="Cascada de Noruega" className="img-grid col-span-2" />
					<img src="./images/noruegaCascada.webp" alt="Aurora boreal en Noruega" className="img-grid col-start-3" />
					<img src="./images/noruegaFiordo2.webp" alt="Fiordo de Noruega" className="img-grid row-start-2" />
					<img src="./images/noruegaRoad.webp" alt="Carretera sinuosa en Noruega" className="img-grid col-span-2 row-start-2" />
				</section>
			</section>
		</>
	);
};

export default Grid;
