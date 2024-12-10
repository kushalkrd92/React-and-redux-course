import Names from "./Names"

let DragonNames = ({dragons}) => {

    return <>
        <ul className="list-group">
        {dragons.map((dragons) => (
          <Names key={dragons} dragons={dragons}></Names>
        ))}
      </ul>
    </>
}

export default DragonNames;