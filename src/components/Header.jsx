import NavLi from "../otherComponents/NavLi";

const Header = () => {
	return (
		<>
			<header  className="flex justify-between items-center py-5 px-6 w-[90%] mx-auto">
				<h1 className="text-2xl font-bold text-white">Noruega Roadtrip</h1>
				<nav>
					<ul className="flex gap-10">
						<NavLi href="#inicio" text="Incio" />
						<NavLi href="#destinos" text="Destinos" />
						<NavLi href="#experiencias" text="Experiencias" />
						<NavLi href="#contacto" text="Contacto" />
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;



