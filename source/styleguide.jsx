import React from 'react';
import Dom from 'react-dom';

import Heading from './tags/heading/heading.jsx';

Dom.render(
  <Heading>Hello World</Heading>,
  document.getElementById('mount-point')
);