export const getAllStaff = () =>
    fetch(`http://localhost:8080/api/staff`)
        .then(res => res.json())

export const deleteStaff = (staffId) =>
    fetch(`http://localhost:8080/api/staff/${staffId}`, {
        method: "DELETE"
    })

export const createStaff = (staff, showroomId) =>
    fetch(`http://localhost:8080/api/staffs/${showroomId}`, {
            method: "POST",
            body: JSON.stringify(staff),
            headers: {
                'content-type': 'application/json'
            }
        }
    ).then(res => res.json())