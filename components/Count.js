const Count = () => {

    const [state, setState] = React.useState(0);

    const handleIncrement = () => setState(state + 1);
    const handleDecrease = () => setState(state - 1);



    return (
        <div>
            <h1 className={state < 0 ? "less" : "greather"}>Count: {state}</h1>
            <hr />
            <button onClick={handleIncrement} >Increment</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};