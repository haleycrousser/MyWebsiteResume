
function Food() {

    const food1 = "Pad Thai";
    const food2 = "Salmon Poke Bowl"

    return (
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food