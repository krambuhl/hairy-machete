import PageRoot from '../tags/page-root/page-root.jsx';
import Poster from '../tags/poster/poster.jsx';

import macheteImg from './images/machete.jpg';

export default ({ children }) => (
	<PageRoot>
		<h1>Machete</h1>
		<Poster src={macheteImg} alt="Machete Poster" />
	</PageRoot>
)