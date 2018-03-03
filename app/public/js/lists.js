$(document).ready(()=>{
    $.ajax({
        url: "/Favorites",
        method: "GET"
    }).done((data)=>{
        for (let i = 0; i < 4; i++) {
            console.log(data[i])
            $(`#favTitle-${i+1}`).text(data[i].title)
            $(`#favAuthor-${i+1}`).text(data[i].author)
            $(`#favImg-${i+1}`).attr("src", data[i].thumbnail)
        }
    })

    $.ajax({
        url: "/Futures",
        method: "GET"
    }).done((data)=>{
        for (let i = 0; i < 4; i++) {
            console.log(data[i])
            $(`#futTitle-${i+1}`).text(data[i].title)
            $(`#futAuthor-${i+1}`).text(data[i].author)
            $(`#futImg-${i+1}`).attr("src", data[i].thumbnail)
        }
    })

    $.ajax({
        url: "/Previous",
        method: "GET"
    }).done((data)=>{
        for (let i = 0; i < 4; i++) {
            console.log(data[i])
            $(`#prevTitle-${i+1}`).text(data[i].title)
            $(`#prevAuthor-${i+1}`).text(data[i].author)
            $(`#prevImg-${i+1}`).attr("src", data[i].thumbnail)
        }
    })

    $.ajax({
        url: "/Currents",
        method: "GET"
    }).done((data)=>{
        for (let i = 0; i < 4; i++) {
            console.log(data[i])
            $(`#curTitle-${i+1}`).text(data[i].title)
            $(`#curAuthor-${i+1}`).text(data[i].author)
            $(`#curImg-${i+1}`).attr("src", data[i].thumbnail)
        }
    })
});