const TaskListItem = require('../lib/taskListItem');

describe('TaskListItem', () => {
	it('should render a string of HTML with an <li></li>', () => {
		const text = 'task list item text';
		const expectedHtml = `<li class="tasks-item">${text}</li>`;
		const taskItem = new TaskListItem([text]);
		const generatedHtml = taskItem.render();
		expect(generatedHtml).toEqual(expectedHtml);
	});
	it('should render a priority task', () => {
		const text = 'priority task list item text';
		const expectedHtml = `<li class="tasks-item tasks-item-priority">${text}</li>`;
		const taskItem = new TaskListItem([text], true);
		const generatedHtml = taskItem.render();
		expect(generatedHtml).toEqual(expectedHtml);
	});
});

