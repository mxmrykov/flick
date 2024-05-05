import React from "react";
import { Helmet } from "react-helmet";

export default function Auth():React.JSX.Element {
    return <section className="App">
        <section id="background"></section>
        {/* @ts-ignore */}
        <Helmet>
            <title>Определяем кто ты...</title>
            <script>
                BgAnimate()
            </script>
        </Helmet>
    </section>
}