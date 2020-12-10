export const getAllShowrooms = () =>
    fetch(`http://localhost:8080/api/showrooms`)
        .then(res => res.json())


export const createShowroom = (showroom) =>
    fetch(`http://localhost:8080/api/showroom`, {
        method: "POST",
        body: JSON.stringify(showroom),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => res.json())

export const changeManager = (showroomId, staffId) =>
    fetch(`http://localhost:8080/api/showrooms/${showroomId}/staff/${staffId}`,
        {
            method:'PUT'
        }
        ).then(res => res.json())
