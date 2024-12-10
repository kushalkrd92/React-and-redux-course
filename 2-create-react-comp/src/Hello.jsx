export default function Hello(){
    let name = 'Kushal'
    let fullname = () => {
        return 'Kushal Kumar'
    }
    return <p>
        Hello, this is {name} <br />
        Full Name: {fullname()}
    </p>
}