import Splash from './Splash'
import { shallow } from 'enzyme'

describe('Splash', () => {

  it('matches the snapshot', () => {
    const wrapper = shallow(<Splash />)

    expect(wrapper).toMatchSnapshot()
  })
})