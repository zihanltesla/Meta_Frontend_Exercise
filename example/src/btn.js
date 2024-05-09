function Btn() {
    const clikHandler = () => { 
        console.log('Button clicked')

    }
    return (
        <button onClick={clikHandler}>Click me</button>
    );
}

export default Btn;