import Image from "next/image";
import { useSession } from "next-auth/react";

export default function Component() {
    const { data: session } = useSession();

    if (session) {
        return <img src={session.user.image} />
    } else {
        return <p>No img</p>
    }
}
