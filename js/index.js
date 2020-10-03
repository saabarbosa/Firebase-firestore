        var listDiv = document.getElementById("div-list");
        let docRef = db.collection("Product");

        docRef.get()
            .then(function (snapshot) {
                snapshot.forEach(function (doc) {
                    console.log(doc.id);
                    console.log(doc.data().Name);
                    html_div = "     <div class=\"card h-100\">";
                    html_div += "        <a href=\"details.html?id=" + doc.id + "\"><img class=\"card-img-top\" src=\"" + doc.data().Photo + "\" alt=\"\"></a>";
                    html_div += "            <div class=\"card-body\">";
                    html_div += "                <h4 class=\"card-title\">";
                    html_div += "                    <a href=\"#?id=" + doc.id + "\">" + doc.data().Name + "</a>";
                    html_div += "                </h4>";
                    html_div += "                <p class=\"card-text\">" + doc.data().Description + "</p>";
                    html_div += "            </div>";
                    html_div += "    </div>";
                    html_div += "</div>";
                    let div = document.createElement("div");
                    div.setAttribute("class", "col-lg-6 col-md-6 mb-6");
                    div.innerHTML = html_div;
                    listDiv.appendChild(div);
                });
            });

