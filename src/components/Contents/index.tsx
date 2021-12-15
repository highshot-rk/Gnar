import Footer from "../Footer/Footer";
import RecentList from "./RecentList";
import Top from "./Top";


function Content() {
	return (
		<>
      <Top />
      <RecentList />
      <div className="py-8">
        <Footer />
      </div>
    </>
	);
}
  
export default Content;