
const formSearch = document.querySelector(`.form`)
const searchInput = document.querySelector(`#search-input`)
const recordsInput = document.querySelector(`#records-input`)
const sourceInput = document.querySelector(`#source-input`)
const newsList = document.querySelector(`.news-list`)
const newsAlert = document.querySelector(`.alert`)

window.onload = () =>
{
    newsAlert.classList.add('hide')
}




console.log(searchInput)


formSearch.addEventListener(`submit`, event =>
{
    event.preventDefault();
    const userInput = searchInput.value;
    const userSourceInput = sourceInput.value

    const url = `http://newsapi.org/v2/everything?q= ${userInput}&` +

        'sources=bbc-news&' +
        `sortBy=${userInput}&` +
        'apiKey=ccb44bac3b5645e98e57b3468afcb5e0';

    fetch(url)
        .then(res => res.json())
        .then(data =>
        {

            console.log(data)
            const articleData = data.articles
            if (articleData.length === 0) {
                newsAlert.classList.remove('hide')

            } else {
                newsAlert.classList.add('hide')
                articleData.forEach(element =>
                {
                    const div = document.createElement('div')
                    newsList.appendChild(div)
                    div.setAttribute('class', 'news-div')
                    // const topArticles = document.querySelector(`.main-2`)
                    // const listUl = document.createElement(`ul`)
                    // topArticles.appendChild(listUl)

                    const listLi = document.createElement(`li`)
                    listLi.setAttribute('class', 'title-li')
                    listLi.textContent = element.title
                    div.appendChild(listLi)



                    // const heading = document.createElement(`h1`)
                    // heading.setAttribute(`class`, `h1-article`)
                    // listLi.appendChild(heading)
                    // heading.textContent = element.title

                    const text = document.createElement(`p`)
                    text.setAttribute(`class`, `paragraph-article`)
                    listLi.appendChild(text)
                    text.textContent = element.description

                })
            };

            // alert('hello')


            // newsAlert.textContent = 'No articles found with this name'


            console.log(articleData)



        })

})


