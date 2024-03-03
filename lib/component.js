class Component {
	constructor(children = []) {
		this.children = children;
	}
	render() {
		throw new Error('Child class must implement a render() method.');
	}
	renderInnerHTML() {
		const stringChildren = [];
		this.children.forEach((child) => {
			if (typeof child === 'string') {
				stringChildren.push(child);
			} else {
				stringChildren.push(child.render());
			}
		});
		return stringChildren.join('');
	}
}

module.exports = Component;