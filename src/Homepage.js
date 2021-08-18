import {useState} from "react";

const Homepage = () => {

    const [name, setName] = useState("Kanwar");
    const [age, setAge] = useState(18);

    const handleClick = () =>{
        setName("Harsh");
        setAge(12)
    }
    const handleButton = (text) =>{
        console.log(`${text} Is here`);
    }

    return ( 
        
        <div className="home">
            <h1>Homepage Content</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Hello World</button>
            <button onClick={() => handleButton("Norm")}>Text is here</button>
            
        </div>
     );
}
 
export default Homepage;