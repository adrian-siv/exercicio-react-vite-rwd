import { Outlet } from "react-router-dom";
import "./App.css";
Outlet;

function App() {
	return (
		<>
			<Outlet />
		</>
	);
}

export default App;
