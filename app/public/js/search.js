let baseUrl = "https://www.googleapis.com/books/v1/volumes?key=AIzaSyATR98NOOmNhPqze9roauhIlfrEnHVDTEE&q="
$(document).ready(()=>{
    $("#searchSubmit").on("click", (event)=>{
        event.preventDefault();
        let query = $("#search").val().trim();
        console.log(query)
        let newUrl = baseUrl + query;
        console.log(newUrl);
        search(newUrl);
    })
})

function send(index, route) {
    const dataObj = {
        title: $("#title-" + index).text(),
        author: $("#author-" + index).text(),
        description: $("#description-" + index).text(),
        thumbnail: $("#img-" + index).attr("src")
    }
    const test = $("#title-0")
    console.log(dataObj);
    $.ajax({
      url: `add/books/${route}`,
      method: "POST",
      data: dataObj
    }).done((results)=>{
        console.log("added to list")
    })
}

const search = (queryUrl) => {
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).done((results)=>{
        returnResults(results)
    })
}
const returnResults = (results) => {
    let data = results.items;
    let l = data.length;
    console.log(l)

    $("#resultsContainer").empty();
    if (!data) {
        $("#resultsContainer").append("<h2> No Results Found </h2>");
    } else {
        for (let i = 0; i < l; i++) {
            let iLoopData = data[i].volumeInfo;
            let thumbnail;
            if (!iLoopData.hasOwnProperty("imageLinks")) {
                thumbnail = "static/images/icons/bookPlaceholder.jpg";
            } else {
                thumbnail = iLoopData.imageLinks.thumbnail;
            }
            let b = {
                title : iLoopData.title,
                author : iLoopData.authors,
                descrip : iLoopData.description,
                thumb : thumbnail
            }
            let bookDiv = $(`<div class='row searchResult'>`);
            bookDiv.attr("id", "result-" + i);
            let leftDiv = $("<div class='col-md-8 leftBookDiv'>");
            let rightDiv = $("<div class='col-md-4 rightBookDiv'>");
            let divTitle = $(`<h3 class='resultTitle' id="title-${i}">Title: ${b.title} </h3>`);
            let divAuthor = $(`<h4 class='resultAuthor' id="author-${i}">Author: ${b.author} </h4>`);
            let divDescrip = $(`<p class='resultDescription' id="description-${i}">Description: ${b.descrip} </p>`);
            let divImage = $(`<img id="img-${i}" class='img-fluid'>`).attr("src", b.thumb);
            let buttons = $(`
            <div class="btn-group" role="group" id="buttons-${i}" aria-label="Search Result Buttons">
                <button type="button" class="btn btn-secondary">Create a BookAThon</button>          
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Add to Lists
                    </button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        <a class="dropdown-item pushToLists" onclick="send(${i}, 'futures')" href="#">Future Reads</a>
                        <a class="dropdown-item pushToLists" onclick="send(${i}, 'currents')" href="#">Current Reads</a>
                        <a class="dropdown-item pushToLists" onclick="send(${i}, 'previous')" href="#">Previous Reads</a>
                        <a class="dropdown-item pushToLists" onclick="send(${i}, 'favorites')" href="#">Favorites</a>
                    </div>
                </div>
            </div>`)
            let rowDiv = $("<div class='row'>");
            let divEnd = $("</div>")
            leftDiv.append(divTitle);
            leftDiv.append(divAuthor);
            leftDiv.append(divDescrip);
            rightDiv.append(rowDiv);
            rightDiv.append(divImage);
            rightDiv.append(divEnd);
            rightDiv.append(rowDiv);
            rightDiv.append(buttons);
            rightDiv.append(divEnd);    
            bookDiv.append(leftDiv);
            bookDiv.append(rightDiv);



            $("#resultsContainer").append(bookDiv);
            console.log(`Title: ${b.title}, Author: ${b.author}, Description: ${b.descrip}, ThumbURL: ${b.thumb} `)
        }
    }
}