import { Component } from 'ts/CustomElement'

@Component({
	selector: 'tilted-block',
	classes: 'm-0 mt-3 ml-3 tilt-right-3',
	extends: 'h2'
})
export class TiltedBlock extends HTMLHeadingElement {

	baseContent: string = ''

	init() {
		this.innerHTML = `<span>${this.baseContent}</span>`
	}

}
