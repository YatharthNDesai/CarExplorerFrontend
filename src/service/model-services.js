export const getModelByVehicleId = (vid) =>
    fetch(`http://localhost:8080/api/vehicles/${vid}`)
        .then(res => res.json())
