function Random(){
    let number = Math.random()*1000;

    return <h2 style={{'background-color': '#5678679f'}}>Predicted Number: {Math.round(number)} </h2>
}

export default Random;