export const createVehicle = (vehicle, mid) =>
    fetch(`http://localhost:8080/api/models/${mid}/vehicles`,
        {
            method: 'POST',
            body: JSON.stringify(vehicle),
            headers: {
                'content-type': 'application/json'
            },
        }).then(response => response.json())

export const getAllVehicles = () =>
    fetch(`http://localhost:8080/api/vehicles`)
        .then(res => res.json())

export const deleteVehicle = (vid) =>
    fetch(`http://localhost:8080/api/vehicles/${vid}`, {
            method: 'DELETE'
        }
    ).then(response => response.json())

export const getVehiclesForModel = (mid) =>
    fetch(`http://localhost:8080/api/models/${mid}/vehicles`)
        .then(res => res.json())