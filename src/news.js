/** @format */

const newsContent = document.querySelector("#newsContent");
const newsList = [
	{ id: 0, Title: "[news]bling bling blah blah 1", Date: "2023-06-12" },
	{ id: 1, Title: "[news]bling bling blah blah 2", Date: "2023-05-12" },
	{ id: 2, Title: "[news]bling bling blah blah 3", Date: "2023-04-02" },
	{ id: 3, Title: "[news]bling bling blah blah 4", Date: "2023-03-06" },
	{ id: 4, Title: "[news]bling bling blah blah 5", Date: "2023-01-12" },
	{ id: 5, Title: "[news]bling bling blah blah 6", Date: "2022-06-25" },
	{ id: 6, Title: "[news]bling bling blah blah 7", Date: "2022-06-16" },
];

window.addEventListener("DOMContentLoaded", getNewsData);

async function getNewsData() {
	try {
		// const res = await fetch()
		// const data = await res.JSON();
		// news = data
		newsList.forEach((news) => {
			newsContent.innerHTML += `
			<div class="sub-text "> <p>${news.Title} </p><p>${news.Date}</p> </div> 
			`;
		});
	} catch (error) {
		console, log(error);
	}
}
