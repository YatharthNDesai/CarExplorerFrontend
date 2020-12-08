export const getAllFeatures = () =>

    fetch(`http://localhost:8080/api/features/`)
        .then(response => response.json())

export const addFeaturesToVehicle = (vid, featuresToAdd) =>


    fetch(`http://localhost:8080/api/vehicles/${vid}/features`,
        {
            method: 'PUT',
            body: JSON.stringify(featuresToAdd),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(response => response.json())