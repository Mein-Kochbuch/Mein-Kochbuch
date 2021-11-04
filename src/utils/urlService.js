const baseUrl = "https://mein-kochbuch.org/api/"

const applyFilter = (filter) => {
    let url = "https://mein-kochbuch.org/api/rezepte/"

    if ("sammlungsID" in filter) {
        url = baseUrl + "sammlungen/" + filter.sammlungsID
    }

    if (filter.count) {
        url = addParameter(url, "page=" + ((filter.count / 10) + 1));
    }

    if (filter.owner) {
        url = addParameter(url, "user=" + filter.owner);
    }

    if (filter.sortBy) {
        url = addParameter(url, "sort=" + filter.sortBy);
    }
    if (filter.favorite) {
        url = addParameter(url, "filteravorite=True");
    }
    if (filter.maxDauer) {
        url = addParameter(url, "time=" + filter.maxDauer);
    }
    if (filter.difficulty) {
        url = addParameter(url, "difficulty=" + filter.difficulty);
    }
    if (filter.zutaten) {
        let ingredients = filter.zutaten[0]

        for (let i = 1; i < filter.zutaten.length; i++) {
            ingredients = ingredients.concat("+").concat(filter.zutaten[i]);
        }
        url = addParameter(url, "ingredients=" + ingredients);
    }

    if (filter.searchWords) {
        let search = filter.searchWords[0]
        for (let i = 1; i < filter.searchWords.length; i++) {
            search = search.concat("+").concat(filter.searchWords[i]);
        }
        url = addParameter(url, "search=" + search);
    }
    return url;
}

const addParameter = (url, parameter) => {
    return url.charAt(url.length - 1) === '/' ? url + "?" + parameter : url + "&" + parameter
}

export {applyFilter}
