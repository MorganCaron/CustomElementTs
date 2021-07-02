import { Component } from 'custom-element-ts'

import html from './index.html'
import css from '!!raw-loader!./style.css'

@Component({
	selector: 'page-tutorial',
	template: html,
	style: css
})
export class Tutorial extends HTMLElement {
}
