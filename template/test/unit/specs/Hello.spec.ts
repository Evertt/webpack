import initComponent from '../initialize'
import { expect } from 'chai'
import Hello from '../../../src/components/Hello.vue'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = initComponent(Hello)
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
