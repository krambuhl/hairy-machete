import PageRoot from '../tags/page-root/page-root.jsx';
import Poster from '../tags/poster/poster.jsx';

import hairImg from './images/hair.jpg';

export default ({ children }) => (
	<PageRoot>
		<h1>Hair</h1>
		<Poster src={hairImg} alt="Hair Poster" />
	</PageRoot>
)