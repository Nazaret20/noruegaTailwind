const Hero = () => {
	return (
		<>
			<section className="h-screen w-full bg-center text-center bg-[url('images/noruegaHero.jpg')] bg-cover overflow-hidden flex items-center justify-center">
				<div className="w-max h-auto py-16 px-10 bg-glass border-[1px] border-border-glass backdrop-blur-sm rounded-lg text-white">
					<h2 className="text-4xl mb-2.5">Explora la belleza de Noruega</h2>
					<p className="mt-4">Un viaje de 5 días por los paisajes más impresionantes.</p>
					<a href="#reservar" className="inline-block mt-14 py-2.5 px-5 bg-secondary rounded-md hover:bg-rose-300 text-black">
						Reserva ahora
					</a>
				</div>
			</section>
		</>
	);
};

export default Hero;

//* From https://css.glass */
// background: rgba(255, 255, 255, 0.26);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(5.1px);
// -webkit-backdrop-filter: blur(5.1px);
// border: 1px solid rgba(255, 255, 255, 0.3);
