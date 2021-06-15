function get_recipe(clicked_recipe) {

    //alert(clicked_recipe);
    localStorage.setItem("recipe_clicked", clicked_recipe);

}

function get_location(clicked_location) {

    localStorage.setItem("location_clicked", clicked_location);

}



function generate_recipe() {


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
            recipe_title.style.fontSize = "60px";
            recipe_title.style.color = "SlateBlue";
            document.getElementById("recipe-content").appendChild(recipe_title);

            for (item in jsonresponse[ingriedient]) {
                //console.log(jsonresponse[ingriedient][item].title);
                var recipe_items = document.createElement("input");
                recipe_items.type = "checkbox";
                recipe_items.classList = "price";
                recipe_items.id = jsonresponse[ingriedient][item].title;
                recipe_items.name = jsonresponse[ingriedient][item].price;
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
                item_price.classList = "test";
                document.getElementById("recipe-content").appendChild(item_price);

                var recipe_image = document.createElement("img");
                recipe_image.src = jsonresponse[ingriedient][item].image;
                recipe_image.style.display = "block";
                document.getElementById("recipe-content").appendChild(recipe_image);

                var br = document.createElement("br");
                document.getElementById("recipe-content").appendChild(br);
            }
        }


        var submit_input = document.createElement("input");
        submit_input.type = "submit";
        submit_input.value = "Submit";
        submit_input.style.borderRadius = "4px";
        submit_input.style.width = "30%";
        submit_input.style.cursor = "pointer";
        submit_input.style.backgroundColor = "#4CAF50";
        //submit_input.classList = "get-started";
        document.getElementById("recipe-content").appendChild(submit_input);
        //console.log(jsonresponse["piept pui"][0].image);

    });
    var final_price = document.createElement("h1");
    final_price.classList = "w3-center";
    final_price.innerHTML = "Final price is: " + localStorage.getItem("sum") + "RON";
    final_price.style.fontWeight = "bold";
    final_price.style.color = "red";
    document.getElementById("final-price").appendChild(final_price);

    var receit = document.createElement("h1");
    receit.classList = "w3-center";
    receit.innerHTML = "Here are the items you have chosen: ";
    receit.style.color = "gray";
    document.getElementById("final-price").appendChild(receit);




    var recipe_location = localStorage.getItem("recipe_clicked");
    if (recipe_location == "teryiaki-chicken") {
        var section = document.createElement("h1");
        section.classList = "w3-center";
        section.id = "section_recipe";
        document.getElementById("final-price").appendChild(section);
        var go_cook = document.createElement("a");
        go_cook.innerHTML = "Here is our recommended recipe";
        go_cook.href = "https://www.retetepractice.ro/retete/pui-teriyaki-cu-orez";
        document.getElementById("section_recipe").appendChild(go_cook);
    }
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function get_final_price() {

    var elements = document.getElementsByClassName("price");
    var sum = 0;
    var receit = [];
    //console.log(elements[0].checked);
    for (var i = 0; i < elements.length; i++) {
        var real_price;
        if (elements[i].checked == true) {

            if (elements[i].name.length == 8) {
                real_price = elements[i].name.substring(0, 4);
                real_price = real_price.replaceAt(1, ".");
                real_price = Number(real_price);
                receit.push(elements[i].id);

            } else {

                real_price = elements[i].name.substring(0, 5);
                real_price = real_price.replaceAt(2, ".");
                real_price = Number(real_price);
                receit.push(elements[i].id);

            }
            sum += real_price;
        }
    }
    console.log(sum);
    console.log(receit);
    localStorage.setItem("sum", sum.toFixed(2));





}