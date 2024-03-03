const Header = require("../lib/header");
const { formatDate } = require("../lib/date");

describe("Header", () => {
  it("should render a header with a current date", () => {
    const expectedHeader = `<header class="header"><h1>Todo Today</h1><p>${formatDate(
      new Date()
    )}</p></header>`;
    const header = new Header();
    const generatedHeader = header.render();
    expect(generatedHeader).toEqual(expectedHeader);
  });
});
