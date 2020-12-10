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

export const deleteBrand = (bid) =>
    fetch(`http://localhost:8080/api/brands/${bid}`,{
        method:'DELETE'
    })
        .then(response => response.status === 500 ? alert('Cannot Delete') : response.json())
        .catch(response => alert('Cannot Delete Brand'))

export const createBrand = (brand) =>
    fetch(`http://localhost:8080/api/brand`,
        {
            method: 'POST',
            body: JSON.stringify(brand),
            headers: {
                'content-type': 'application/json'
            },
        }).then(response => response.json())