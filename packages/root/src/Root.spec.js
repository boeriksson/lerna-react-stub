import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent, screen} from '@testing-library/react'

import Root from './Root'

describe('#Root', () => {
    it('should render', () => {
        render(<Root/>)

        expect(screen.queryByText('component')).toBeNull()
    })
})