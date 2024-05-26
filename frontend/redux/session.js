//! Create the login thunk. 

//! Constants

const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";

const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

const removeUser = () => ({
    type: REMOVE_USER,
})

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
    const res = await fetch("/api/auth/", {
        headers: {
            "Content-Type": "application/json"
        },
    });

    if (res.ok) {
        const data = await res.json();
        if (data.errors) {
            return errors;
        }

        dispatch(setUser(data));
    }

}
