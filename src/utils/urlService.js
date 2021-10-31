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
        url = addParameter(url, "diffiltericulty=" + filter.difficulty);
    }
    if (filter.zutaten) {
        const ingredients = ""
        ingredients.append(filter.zutaten.get(0));

        for (let i = 1; i < filter.zutaten.size(); i++) {
            ingredients.append("+").append(filter.zutaten.get(i));
        }
        url = addParameter(url, "ingredients=" + ingredients);
    }

    if (filter.searchWords) {
        const search = ""
        search.append(filter.searchWords.get(0));
        for (let i = 1; i < filter.searchWords.size(); i++) {
            search.append("+").append(filter.searchWords.get(i));
        }
        url = addParameter(url, "search=" + search);
    }
    return url;
}

const addParameter = (url, parameter) => {
    return url.charAt(url.length - 1) === '/' ? url + "?" + parameter : url + "&" + parameter
}

export {applyFilter}
