import {applyFilter} from "../../src/utils/urlService";

describe('urlService Test', () => {
    it('default', () => {

        const filter = {}

        const url = applyFilter(filter)

        expect(url).toBe("https://mein-kochbuch.org/api/rezepte/")
    })

    it('cookbook', () => {

        const filter = {sammlungsID: "1"}

        const url = applyFilter(filter)

        expect(url).toBe("https://mein-kochbuch.org/api/sammlungen/1")
    })

    it('page', () => {

        const filter = {count: 10}

        const url = applyFilter(filter)

        expect(url).toBe("https://mein-kochbuch.org/api/rezepte/?page=2")
    })

    it('owner', () => {

        const filter = {owner: "me"}

        const url = applyFilter(filter)

        expect(url).toBe("https://mein-kochbuch.org/api/rezepte/?user=me")
    })

    it('sortBy', () => {

        const filter = {sortBy: "-avg_rating"}

        const url = applyFilter(filter)

        expect(url).toBe("https://mein-kochbuch.org/api/rezepte/?sort=-avg_rating")
    })

    it('favorite', () => {

        const filter = {favorite: "True"}

        const url = applyFilter(filter)

        expect(url).toBe("https://mein-kochbuch.org/api/rezepte/?filteravorite=True")
    })

    it('duration', () => {

        const filter = {maxDauer: 10}

        const url = applyFilter(filter)

        expect(url).toBe("https://mein-kochbuch.org/api/rezepte/?time=10")
    })

    it('difficulty', () => {

        const filter = {difficulty: "Mittel"}

        const url = applyFilter(filter)

        expect(url).toBe("https://mein-kochbuch.org/api/rezepte/?difficulty=Mittel")
    })

    it('ingredients', () => {

        const filter = {
            zutaten: [
                "zutat1",
                "zutat2"
            ]
        }

        const url = applyFilter(filter)

        expect(url).toBe("https://mein-kochbuch.org/api/rezepte/?ingredients=zutat1+zutat2")
    })

    it('search', () => {

        const filter = {
            searchWords: [
                "searchWord1",
                "searchWord2"
            ]
        }

        const url = applyFilter(filter)

        expect(url).toBe("https://mein-kochbuch.org/api/rezepte/?search=searchWord1+searchWord2")
    })
})
