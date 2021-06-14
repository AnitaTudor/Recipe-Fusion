//console.log(location)
function get_recipe(clicked_recipe) {

    //alert(clicked_recipe);
    localStorage.setItem("recipe_clicked", clicked_recipe);

}

function get_location(clicked_location) {

    localStorage.setItem("location_clicked", clicked_location);

}



function generate_recipe() {
    //console.log(localStorage.getItem("recipe_clicked"));
    var recipe_location = localStorage.getItem("recipe_clicked") + "_" + localStorage.getItem("location_clicked") + ".json";
    var recipe_categ = localStorage.getItem("recipe_clicked") + "_" + localStorage.getItem("location_clicked") + "_cat";
    //console.log(recipe_location);
    const json_file = "../recipes/" + recipe_location;
    //console.log(json_file);
    //const fis = JSON.parse("json_file");

    /* for (var key in fis) {
        if (fis.hasOwnProperty(key)) {
            console.log(key + " -> " + fis[key]);
        }
    }
*/

    function loadJSON(callback) {

        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        var recipe_location = localStorage.getItem("recipe_clicked") + "_" + localStorage.getItem("location_clicked") + ".json";
        const json_file = "../recipes/" + recipe_location;
        xobj.open('GET', json_file, true);
        xobj.onreadystatechange = function() {
            if (xobj.readyState == 4 && xobj.status == "200") {

                // .open will NOT return a value but simply returns undefined in async mode so use a callback
                callback(xobj.responseText);

            }
        }
        xobj.send(null);

    }

    // Call to function with anonymous callback
    loadJSON(function(response) {
        // Do Something with the response e.g.
        jsonresponse = JSON.parse(response);

        for (ingriedient in jsonresponse) {
            //console.log(jsonresponse[ingriedient]);
            var recipe_title = document.createElement("h1");
            recipe_title.classList = "w3-center";
            recipe_title.innerHTML = ingriedient;
            recipe_title.style.fontWeight = "bold";
            recipe_title.style.color = "SlateBlue";
            document.getElementById("recipe-content").appendChild(recipe_title);

            for (item in jsonresponse[ingriedient]) {
                //console.log(jsonresponse[ingriedient][item].title);
                var recipe_items = document.createElement("input");
                recipe_items.type = "checkbox";
                recipe_items.name = jsonresponse[ingriedient][item].title;
                document.getElementById("recipe-content").appendChild(recipe_items);

                var recipe_label = document.createElement("label");
                //var item_price = jsonresponse[ingriedient][item].price;
                recipe_label.innerHTML = jsonresponse[ingriedient][item].title + "  ,   ";
                recipe_label.style.fontWeight = "bold";
                recipe_label.style.fontSize = "18px";
                document.getElementById("recipe-content").appendChild(recipe_label);

                var item_price = document.createElement("span");
                item_price.innerHTML = jsonresponse[ingriedient][item].price;
                item_price.style.color = "red";
                item_price.style.fontSize = "30px";
                document.getElementById("recipe-content").appendChild(item_price);

                var recipe_image = document.createElement("img");
                recipe_image.src = jsonresponse[ingriedient][item].image;
                recipe_image.style.display = "block";
                document.getElementById("recipe-content").appendChild(recipe_image);

                var br = document.createElement("br");
                document.getElementById("recipe-content").appendChild(br);
            }
        }

        //console.log(jsonresponse["piept pui"][0].image);

    });
}