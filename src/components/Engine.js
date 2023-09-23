import React from "react";
import Content from "./Content";
import Day from "./Day";
import Menu from "./Menu";
import "../App.css";

class Engine extends React.Component {

    state = {
        dishes: [
            { id: 1, title: 'Szakszuka', kcal: 430, fats: 20, carbons: 45, proteins: 36 },
            { id: 2, title: 'Spaghetti', kcal: 620, fats: 32, carbons: 60, proteins: 28 },
            { id: 3, title: 'Tortilla z kurczakiem', kcal: 320, fats: 10, carbons: 36, proteins: 20 },
        ],
        summaryDay: {
            kcal: 2300,
            fats: 80,
            carbons: 250,
            proteins: 140
        },
    }

    calculateDay = (id) =>{
        
        const index = this.state.dishes.findIndex(x => x.id === id)
        const newSummaryDay = this.state.summaryDay;
        newSummaryDay.kcal = newSummaryDay.kcal + this.state.dishes[index].kcal 
        console.log(this.state.dishes[index])+
        console.log(newSummaryDay)
 /*        this.setState( {summaryDay: newSummaryDay})  */
    }

    render() {

/*         const dishes = this.state.dishes.map(e => {
            return <div key={e.id}> {e.title}</div>
        }) */

        return (
            <div className="App">
                <Menu />
                <Content dishes={this.state.dishes} calculateDay={this.calculateDay} />
                <Day summaryDay={this.state.summaryDay} />
            </div>
        )
    }
}

export default Engine