

export const suma = (a: number, b: number) => {
    return a + b
}



const Suma = () => {
    return (
        <h1>
            {suma(1, 2)}
        </h1>
    );
};

export default Suma;