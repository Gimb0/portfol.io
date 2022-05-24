export function checkTokenValidity() {
    let tokenInfo = sessionStorage.getItem("token");
    let isLoggedIn = false;
    if (tokenInfo != null) {
        fetch("/isValidToken", {
            method: "GET",
            headers: {
                "Authorization": sessionStorage.getItem("token"),
            }
        })
            .then(resp => {
                if (resp.ok) {
                    console.log("token valid");
                } else {
                    sessionStorage.removeItem("token");
                    console.log("token invalid");
                    window.location.assign("/login");
                }
            });
        isLoggedIn = true;
        var m = tokenInfo.lastIndexOf(" ");
        tokenInfo = tokenInfo.substring(m + 1);
    }
}

export function checkIfAdmin() {
    let tokenInfo = sessionStorage.getItem("token");
    if(tokenInfo != null) {
        fetch("/isAdmin", {
            method: "GET",
            headers: {
                "Authorization": sessionStorage.getItem("token"),
            }
        })
        .then(resp => {
            if(resp.ok) {
                console.log("user is admin");
            } else {
                console.log("user is not admin");
            }
        })
    }
}

export function getAllUsers() {
    fetch("/userList", {
        method: "GET",
        headers: {
            "Authorization": sessionStorage.getItem("token"),
        }
    })
    .then(resp => {
        if(resp.ok) {
            console.log("got users");
        }
        return resp.json()
    })
    .then(body => {
        console.log(body);
    });
}