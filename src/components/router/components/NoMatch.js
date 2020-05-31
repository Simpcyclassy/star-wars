
import React from 'react';
import { message } from 'antd';

import { NO_MATCH } from '../constants';
import history from '../../history';

const NoMatch = ({ location }) => message.error(
    <div>
        <p>{NO_MATCH}</p>
        {location.pathname}
    </div>
) && setTimeout(() => {
    history.goBack();
}, 2000);

export default NoMatch;