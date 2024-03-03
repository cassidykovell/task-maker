const Component = require('./component');

class TaskListItem extends Component {
	constructor(children, priority = false) {
		super(children);
		this.priority = priority;
	}
	render() {
		let taskItemClasses = 'tasks-item';
		if (this.priority) {
			taskItemClasses = 'tasks-item tasks-item-priority';
		}
		return `<li class="${taskItemClasses}">${this.renderInnerHTML()}</li>`;
	}
}

module.exports = TaskListItem;