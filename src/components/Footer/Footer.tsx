
function Footer() {

	return (
		<div className="flex gap-6 font-boloon text-base justify-center">
      <a href="https://discord.com/" style={{textDecoration: 'none'}} className="text-gray-800 hover:text-green-600">discord</a>
      <a href="https://twitter.com/" style={{textDecoration: 'none'}} className="text-gray-800 hover:text-green-600">twitter</a>
      <a href="https://etherscan.com/" style={{textDecoration: 'none'}} className="text-gray-800 hover:text-green-600">etherscan</a>
      <a href="https://art.haus/" style={{textDecoration: 'none'}} className="text-gray-800 hover:text-green-600">discourse</a>
    </div>
	);
}
  
export default Footer;