import { render, screen } from '@testing-library/react'

import Feature from '.'

describe('<Feature />', () => {
  it('should render the heading', () => {
    const { container } = render(<Feature title={''} description={''} />)

    expect(
      screen.getByRole('heading', { name: /Feature/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
