// import React from "react";
import React, { useEffect, useState } from "react";

export default function Recipes() {

    const [isLoading, setIsLoading] = useState(true)
    const [recipes, setRecipes] = useState(null);

    useEffect(() => 
    {
        fetch ('http://localhost:1337/api/recipes',
            {
                method: "GET",
                headers: 
                {
                    'Accept': 'Application/json'
                }

            })
        .then(res => res.json())
        .then(res => 
            {
            setRecipes(res)
            setIsLoading(false)
            })
        
    },[]);


    return (
        <div>
            <h1>Liste des recettes: </h1>
            <div>
                {isLoading ? 'Chargement...' : recipes.data.map(recipes =>recipes.attributes.recipe_name)}
            </div>
            {/* <div>
                {isLoading ? 'Chargement...' : recipes.data.map(recipes =>recipes.attributes.nationality)}
            </div> */}

        </div>
    )
}





// class App extends React.Component {
//         constructor(props) {
//                 super(props);
        
//                 this.state = {
//                         items: [],
//                         DataisLoaded: false
//                     };
//                 }
            
//                 componentDidMount() {
//                         fetch(
//                                     "http://localhost:1337/api/recipes")
//                                 .then((res) => res.json())
//                                 .then((json) => {
//                                         this.setState({
//                                                 items: json,
//                                                 DataisLoaded: true
//                                             });
//                                         })
//                                 }
//                                 render() {
//                                         const { DataisLoaded, items } = this.state;
//                                         if (!DataisLoaded) return <div >
//                                             <h1> Chargement... </h1> </div > ;
                                
//                                         return ( <div className = "App" >
//                                                 <h1> Liste des recettes: </h1>  {
//                                                     items.data.map((item) => (
    
//                         <div key = { item.id } >
//                         <h3>{ item.attributes.recipe_name }</h3> <br></br> 
//                         { item.attributes.nationality } <br></br> 
//                         { item.attributes.quantity } <br></br> 
//                         { item.attributes.description } <br></br> 
//                         { item.attributes.author } <br></br>
//                         </div>
    
//                     ))
    
//                 }</div>
//         );
//     }
//     }
//     export default App;