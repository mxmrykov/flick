import React from "react";
import Helmet from "react-helmet"
import Center from "../../blocks/sys/Center.tsx";
import { useNavigate } from "react-router-dom";
import needAuth from "../../../../domain/app/auth/auth.ts";

export default function DefineRoute(): React.JSX.Element {

    const navigator = useNavigate()

    if (needAuth()) navigator("/auth")
    else navigator("/home")

    return <section className="App">
        <section id="background"></section>
        <Center>
            <div
            style={{
                display: "flex",
                flexDirection: "column",
            }}
            className="text-alert-fullscreen"
            >
                <h1>
                    Подожди секунду...
                </h1>
                <h4>
                    Wait a second...
                </h4>
            </div>
        </Center>
        {/* @ts-ignore */}
        <Helmet>
            <title>Определяем кто ты...</title>
            <script>
                BgAnimate()
            </script>
        </Helmet>
    </section>
}