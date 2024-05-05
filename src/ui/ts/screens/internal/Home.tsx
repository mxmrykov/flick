import React from "react";
import { Helmet } from "react-helmet";

export default function Home(): React.JSX.Element {
    return <section className="App">
        {/* @ts-ignore */}
        <Helmet>
            <title>Главная</title>
        </Helmet>
    </section>
}