import ResponsiveHeader from 'dna-responsive-nav'
import 'semantic-ui-css/semantic.min.css'
import 'dna-responsive-nav/dist/dna-rn.css'
import { Link } from "react-router-dom";
import ShortAddress from '../utils/ShortAddress';

function Menu() {
	const links = (
		<ul className='font-boloon text-lg'>
			<li className="w-1/3"></li>
			<li>
				<a href='https://etherscan.io/address/0x66B8304a9ef672EBA423CE5878E404e371A7F140' target='_blank' rel="noreferrer" >
					TREASURY<span className='text-sm font-Shadeerah'><ShortAddress address="0x66B8304a9ef672EBA423CE5878E404e371A7F140" className='font-' /></span>
				</a>
			</li>
			<li>
				<Link to="/connect_wallet">CONNECT WALLET</Link>
			</li>
		</ul>
	)
	return (
			<ResponsiveHeader
				links={links}
				logo='/assets/images/gnar-logo-black.svg'
			/>
	);
}
  
export default Menu;