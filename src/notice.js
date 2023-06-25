/** @format */

const newsContent = document.querySelector("#notice-content");
const newsList = [
	{
		id: 0,
		Title: "[notice] styled news section,flowbite bug encountred[excepted behavior: switching tabs in any order ][bug: layer overlap when switching unorderly ] ",
		Date: "2023-06-25",
	},
	{ Title: "[notice]added news/styled home page", Date: "2023-07-25" },
	{ Title: "[notice]added home page", Date: "2023-07-24" },
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
