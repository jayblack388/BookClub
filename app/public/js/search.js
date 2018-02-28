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
// <----  Need to write ajax posts for each click function
    function bookathon() {

    }

    function favorites() {

    }

    function future() {

    }

    function current() {

    }

    function previous() {

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
            let description;
            if (!iLoopData.hasOwnProperty("imageLinks")) {
                thumbnail = "static/images/icons/bookPlaceholder.jpg";
            } else {
                thumbnail = iLoopData.imageLinks.thumbnail;
            }
            if (!iLoopData.hasOwnProperty("description")) {
                description = "Description not Found!";
            } else {
                description = iLoopData.description;
            }
            
            let b = {
                title : iLoopData.title,
                author : iLoopData.authors,
                descrip : description,
                thumb : thumbnail
            }
            let rowDiv = $("<div class='row'>");
            let divEnd = $("</div>")
            let bookDiv = $("<div class='row searchResult'>");
            bookDiv.attr("id", "result-" + i);
            let leftDiv = $("<div class='col-sm-8 leftBookDiv'>");
            let rightDiv = $("<div class='col-sm-4 rightBookDiv'>");
            let formVar = $(`
            <form id="resultsForm-${i}">
                <div class="form-group row">
                    <label for="resultTitle-${i}" class="col-sm-2 col-form-label">Title:</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext resultTitle" id="resultTitle-${i}" value="${b.title}">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="resultAuthor-${i}" class="col-sm-2 col-form-label">Author:</label>
                    <div class="col-sm-10">
                    <input type="text" readonly class="form-control-plaintext resultAuthor" id="resultAuthor-${i}" value="${b.author}">
                    </div>
                </div>
                <div class="form-group">
                    <label for="resultDescription-${i}">Description</label>
                    <p id="resultDescription-${i}" class="resultDescription">${b.descrip}</p>
                </div>
                
            `);
            let buttons = $(`
                <div class="btn-group" role="group" aria-label="Search Result Buttons">
                    <button type="submit" class="btn btn-secondary" name="action" value="bookathon" onclick="bookathon()">Create a BookAThon</button>          
                    <div class="btn-group" role="group">
                        <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add to Lists
                        </button>
                        <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                            <button class="dropdown-item pushToLists" type="submit" name="action" value="favorites" onclick="favorites()">Favorites</button>
                            <button class="dropdown-item pushToLists" type="submit" name="action" value="Future Reads" onclick="future()">Future Reads</button>
                            <button class="dropdown-item pushToLists" type="submit" name="action" value="Current Reads" onclick="current()">Current Reads</button>
                            <button class="dropdown-item pushToLists" type="submit" name="action" value="Previous Reads" onclick="previous()">Previous Reads</button>
                        </div>
                    </div>    
                </div>
            </form>`);

            const divImage = $(`<img id="resultThumbnail-${i}" class='img-fluid' src="${b.thumb}">`)

            leftDiv.append(formVar);
            rightDiv.append(rowDiv);
            rightDiv.append(divImage);
            rightDiv.append(divEnd);
            rightDiv.append(rowDiv);
            rightDiv.append(buttons);
            rightDiv.append(divEnd); 
            bookDiv.append(leftDiv);
            bookDiv.append(rightDiv);
    
            
            $("#resultsContainer").append(bookDiv);
        }
    }
}