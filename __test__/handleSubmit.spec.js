import { handleSubmit } from '../src/client/js/clickHandler'

describe('Click Handler function',() => {
    it('Passing a click event', () =>{
        const event = new Event('click')
        expect(handleSubmit(event)).toEqual(false)
    })
})