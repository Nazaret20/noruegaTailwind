const NavLi = ({href, text}) => {
	return (
		<li className="text-white font-bold border-b-2 border-transparent hover:border-b-2 hover:border-white transition-colors duration-300 ease-in-out">
			<a href={href}>{text}</a>
		</li>
	);
};

export default NavLi;
