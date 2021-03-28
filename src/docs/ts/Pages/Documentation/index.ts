import { Component } from 'ts/CustomElement'
import html from './index.html'
import css from '!!raw-loader!./style.css'

@Component({
	selector: 'page-documentation',
	template: html,
	style: css
})
export class Documentation extends HTMLElement {
}
