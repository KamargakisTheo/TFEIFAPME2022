import React from "react";

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch(
                "http://localhost:1337/api/recipes")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div >
            <h1> Chargement... </h1> </div > ;

        return ( <div className = "App" >
                <h1 > Liste des recettes: </h1>  {
                items.data.map((item) => (

                    <div key = { item.id } >
                    { item.attributes.recipe_name } < br > </br> 
                    { item.attributes.nationality } < br > </br > 
                    { item.attributes.quantity } < br > </br> 
                    { item.attributes.description } < br > </br > 
                    { item.attributes.author } < br > </br>
                    </div>

                ))

            }</div>
    );
}
}

export default App;