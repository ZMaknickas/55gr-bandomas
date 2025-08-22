import { useContext } from "react";
import { UserContext } from "../../context/user/UserContext";

export function AdminDasboardPage() {
    const { email } = useContext(UserContext);

    return (
        <main>
            <p>Tai yra vadibininko paštas, kreiptis ne veliau 17.30:</p> 
                <p>{email}</p>
                <p>Prašome elgtis kulturingai.</p>
        </main>
    );
}