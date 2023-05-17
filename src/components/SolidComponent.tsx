import { createEffect, createSignal, onCleanup } from "solid-js";

export default function MyComponent(props: any) {
    // const [first, setFirst] = createSignal("JSON");
    // const [last, setLast] = createSignal("Bourne");

    // createEffect(() => console.log(`${first()} ${last()}`));
    // return (
    //     <div>Hello {props?.name}</div>
    // )

    const [count, setCount] = createSignal(0),
        timer = setInterval(() => setCount(count() + 1), 1000);
    onCleanup(() => clearInterval(timer));

    return <div>{count()}</div>;
}
