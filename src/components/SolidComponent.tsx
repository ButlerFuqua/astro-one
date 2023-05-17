import { createEffect, createSignal } from "solid-js";

export default function MyComponent(props: any) {
    const [first, setFirst] = createSignal("JSON");
    const [last, setLast] = createSignal("Bourne");

    createEffect(() => console.log(`${first()} ${last()}`));
    return (
        <div>Hello {props?.name}</div>
    )
}
