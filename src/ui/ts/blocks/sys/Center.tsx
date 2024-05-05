import React from "react";

export default function Center(props: {
    children: React.ReactNode; 
  }): React.JSX.Element {
    return <article className="ts-blocks-sys-center">
        {props.children}
    </article>
}