
const API = "http://localhost:8000/api";

export const signup = user => {
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err));
};


export const signin = user => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}


export const authenticate = (data, next) => {
    if (typeof Window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data))
        next()
    }
}

export const isAuthenticated = () => {
    if (typeof Window == "undefined") {
        return false
    }

    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }
}

export const urlPost = (userId, token, url) => {
    console.log(url)
    return fetch(`${API}/shorten/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(url)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const getUrls = (userId, token) => {
    return fetch(`${API}/user-urls/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const updatePlace = (placeId, userId, token) => {
    return fetch(`${API}/linkNgoWithPlace/${placeId}/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const getPlaceByNgo = (userId, token) => {
    return fetch(`${API}/getPlacesByNgo/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

export const getUrl = (urlId) => {
    return fetch(`${API}/get-url/${urlId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}