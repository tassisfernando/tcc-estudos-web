import { createRoot } from 'react-dom/client'
import "./styles.css";
import {World3D} from "./components/World3D";

createRoot(document.getElementById('root')).render(
	<div>
		<div className='header'>
			<h1>3D world test</h1>
		</div>
		<div className='world'>
			<World3D />
		</div>
	</div>
);