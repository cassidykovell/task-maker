const Component = require('./component.js');

class TaskList extends Component {
	constructor(children) {
		super(children);
	}
	render() {
		const renderChildren = this.children.map((child) => child.render());
		return `<ul class="tasks">${renderChildren.join('')}</ul>`;
	}
}

module.exports = TaskList;