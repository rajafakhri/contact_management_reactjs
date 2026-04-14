import { useEffectOnce, useLocalStorage } from "react-use"
import { userLogout } from "../../lib/api/UserApi";
import { useNavigate } from "react-router";
import { alertError } from "../../lib/alart";

export default function UserLogout() {
    const [token, setToken] = useLocalStorage('token', '');
    const navigate = useNavigate();
    async function handleLogout() {
        const response = await userLogout(token);
        const reponseBody = await response.json();
        console.log(reponseBody);
        if(response.status === 200) {
            setToken('');
            await navigate({
                pathname: '/login',
            })
        }else{
            await alertError(reponseBody.error);
        }
    }

    useEffectOnce(() => {
        handleLogout()
        .then(() => console.log('User logged out successfully'));
    })
    return (
        <></>
    )
}