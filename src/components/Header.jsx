import NavLi from "../otherComponents/NavLi";

const Header = () => {
	return (
		<>
			<header className="bg-header">
				<section className="flex justify-between items-center py-5 px-6 w-[90%] mx-auto">
					<h1 className="text-2xl font-bold text-white">Noruega Roadtrip</h1>
					<nav>
						<ul className="flex gap-10">
							<NavLi href="#destinos" text="Destinos" />
							<NavLi href="#itinerario" text="Itinerario" />
							<NavLi href="#reservar" text="Reservar" />
						</ul>
					</nav>
				</section>
			</header>
		</>
	);
};

export default Header;
