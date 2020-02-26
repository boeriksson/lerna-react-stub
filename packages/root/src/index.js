import ReactDom from 'react-dom'
import React from 'react'

import Root from './Root'

const init = () => {
    ReactDom.render(<Root/>, document.getElementById('app'))
}

init()