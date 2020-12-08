export const getBrandByName = (name) =>

    fetch(`http://localhost:8080/api/brands/${name}`, {
        method: 'GET'
    })
        .then(response => response.json())
        .catch(() => alert("Brand Not found"))

export const getAllBrands = () =>

    fetch(`http://localhost:8080/api/brands/`)
        .then(response => response.json())
// .catch(() => alert("Brand Not found"))

export const getBrandByModelId = (mid) =>
    fetch(`http://localhost:8080/api/models/${mid}`)
        .then(res => res.json())