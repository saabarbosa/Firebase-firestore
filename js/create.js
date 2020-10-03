

        var LoadingData = document.querySelector("#loading_data");
		LoadingData.innerHTML = "";
		
        var SaveData = document.querySelector("#SaveData");

        var NameProduct = document.querySelector("#NameProduct");
        var Description = document.querySelector("#Description");
        var Category = document.querySelector("#Category");
        var Photo = document.querySelector("#Photo");

        

        // atualiza informações do produto
        SaveData.addEventListener('click', function () {
            LoadingData.innerHTML = "<img src=\"img/loading.gif\" alt=\"carregando...\" />";
            insertProduct(
                NameProduct.value,
                Description.value,
                Category.value,
                Photo.value
            );
			LoadingData.innerHTML = "<span style=\"color:red\">Dados inserido com sucesso.</span>";
        })


        function getCategories() {

            var docRef = db.collection("Category").where("Display", "==", true);
            docRef.get()
                .then(function (snapshot) {
 
                    snapshot.forEach(function (doc) {
                        var d = doc.data();
                        var option = document.createElement("option");
                        option.value = doc.id;
                        option.text = d.Name;
                        Category.add(option);
                    });
                });

        }
		
		setTimeout(getCategories,2000);

        // insert product
        function insertProduct(name, description, category, photo) {
				let docRefCategory = db.collection("Category").doc(category); 
                db.collection("Product").add({
                    "Name": name,
                    "Description": description,
                    "Category": docRefCategory,
                    "Photo": photo
                })
                .then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
					
                })
                .catch(function (error) {
                    console.error("Error adding document: ", error);
                });
            return;
        }
        

       