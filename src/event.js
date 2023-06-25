/** @format */

const newsContent = document.querySelector("#event-content");
const newsList = [
	{ id: 0, Title: "[event]bling blong event 1 ", Date: "2023-06-12" },
	{ id: 1, Title: "[event]bling blong event 2", Date: "2023-05-12" },
	{ id: 2, Title: "[event]blong bling event 3", Date: "2023-04-02" },
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
