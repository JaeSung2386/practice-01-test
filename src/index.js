import React from "react";
import { render } from "react-dom";
import * as serviceWorker from './serviceWorker';

import Root from './root';

render(<Root />, document.getElementById('root'));

serviceWorker.unregister();