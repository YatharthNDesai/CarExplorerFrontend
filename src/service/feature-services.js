export const getAllFeatures = () =>

    fetch(`http://localhost:8080/api/features`)
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

export const getAllFeaturesByVehicle = (vehicleId) =>
    fetch(`http://localhost:8080/api/vehicles/${vehicleId}/features`)
        .then(res => res.json())

export const createFeature = (feature) =>
    fetch(`http://localhost:8080/api/features`, {
        method: 'POST',
        body: JSON.stringify(feature),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())

export const deleteFeature = (featureId) =>
    fetch(`http://localhost:8080/api/features/${featureId}`, {
        method: 'DELETE'
    }).then(res => res.json())