export const getAllStaff = () =>
    fetch(`http://localhost:8080/api/staff`)
        .then(res => res.json())

export const deleteStaff = (staffId) =>
    fetch(`http://localhost:8080/api/staff/${staffId}`,{
        method: "DELETE"
    })