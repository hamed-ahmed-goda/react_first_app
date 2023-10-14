const FunctionalProps = (props) => {
    const { fname, sname, age, city } = props.bio;
    return (
        <div>
            <h2>
                Hello, My name is { fname } { sname }  and i am { age } years old and i live in { city } 
            </h2>
            {props.children}
        </div>
    )
}

export default FunctionalProps;