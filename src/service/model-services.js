export const getModelByVehicleId = (vid) =>
    fetch(`http://localhost:8080/api/vehicles/${vid}`)
        .then(res => res.json())


export const getAllModels = () =>
    fetch(`http://localhost:8080/api/models`)
        .then(res => res.json())

export const getAllModelsByBrand = (brandId) =>
    fetch(`http://localhost:8080/api/brands/${brandId}/models/`)
        .then(response => response.json())

export const createModel = (model, brandId) =>
    fetch(`http://localhost:8080/api/brands/${brandId}/models`, {
        method: "POST",
        body: JSON.stringify(model),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(response => response.json())

export const deleteModel = (modelId) =>
    fetch(`http://localhost:8080/api/models/${modelId}`, {
        method: 'DELETE'
    }).then(response => response.json())