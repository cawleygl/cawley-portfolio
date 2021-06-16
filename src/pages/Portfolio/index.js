// import React, { useEffect, useState } from 'react'
// import { useAppContext } from '../../utils/AppContext'
import { Col, Container, Row } from 'react-bootstrap';
import PageTitle from '../../components/PageTitle'
import ProjectCard from '../../components/ProjectCard'

//Project screenshot images from Assets folder
import Burger from '../../Assets/BurgerEater.png'
import Recipe from '../../Assets/RecipeGenerator.png'
import Weather from '../../Assets/WeatherDashboard.png'
import Planner from '../../Assets/WorkdayPlanner.png'
import Blackjack from '../../Assets/BlackJackCasino.png'
import Multiplayer from '../../Assets/CasinoGamePage.png'
import Employee from '../../Assets/EmployeeCoordinator.png'
import Notes from '../../Assets/NoteTaker.png'
import Budget from '../../Assets/BudgetTracker.png'
import Fitness from '../../Assets/FitnessTracker.png'

import "./style.css"

const PortfolioPage = () => {
    return (
        <Container>
            <PageTitle title="Portfolio" subtitle="Previews of completed coding projects and assignments, with links to deployed projects and GitHub repositories"></PageTitle>
            <Row xs={1} md={2} lg={3}>
                <Col>
                    <ProjectCard asset={Multiplayer} title="Multiplayer Blackjack Casino" text="A multiplayer update to the Blackjack Casino applicaion that allows users to sign up and play with others online using WebSockets." appLink="https://casino-multiplayer.herokuapp.com/" repoLink="https://github.com/EgiVilza/Casino_Multiplayer"></ProjectCard>
                </Col>
                <Col>
                    <ProjectCard asset={Blackjack} title="Blackjack Casino" text="A Blackjack application that allows users to play games of Blackjack against an automated dealer and save their balance to a MySQL datatbase to be displayed on a leaderboard." appLink="https://frozen-wildwood-18963.herokuapp.com/" repoLink="https://github.com/EgiVilza/Project2"></ProjectCard>
                </Col>
                <Col>
                    <ProjectCard asset={Recipe} title="Nutritious Recipe Generator" text="A web application that allows users to quickly display recipes from a recipe API in different ways and save them to view at a later time." appLink="https://egivilza.github.io/NutritiousRecipeGenerator/" repoLink="https://github.com/EgiVilza/NutritiousRecipeGenerator"></ProjectCard>
                </Col>

                <Col>
                    <ProjectCard asset={Budget} title="Budget Tracker" text="A downloadable Progressive Web Application that allows users to submit transactions to a budget tracker while online or offline." appLink="https://damp-ocean-87545.herokuapp.com/" repoLink="https://github.com/cawleygl/offline-budget-tracker"></ProjectCard>
                </Col>

                <Col>
                    <ProjectCard asset={Employee} title="Employee Coordinator" text="A simple React application that generates randomized employee data from an API, displayes them in a table, and sorts them by ID and Last Name using React state." appLink="https://cawleygl.github.io/react-employee-coordinator/" repoLink="https://github.com/cawleygl/react-employee-coordinator"></ProjectCard>
                </Col>
                <Col>
                    <ProjectCard asset={Fitness} title="Fitness Tracker" text="An application that allows users to save and track workouts using a MongoDB database." appLink="https://calm-island-07024.herokuapp.com/?id=606612e6a5a356001507c697" repoLink="https://github.com/cawleygl/Fitness-Tracker"></ProjectCard>
                </Col>
                <Col>
                    <ProjectCard asset={Weather} title="Weather Dashboard" text="A weather dashboard application that shows current weather conditions in any city, as well as a 5-day forecast using an API." appLink="https://cawleygl.github.io/weather-dashboard/" repoLink="https://github.com/cawleygl/weather-dashboard"></ProjectCard>
                </Col>
                <Col>
                    <ProjectCard asset={Burger} title="Burger Eater" text="A simple application that saves burgers to a MySQL database, allows the user to submit new burgers, and change their state from 'Hot & Fresh' to 'Devoured.'" appLink="https://floating-ocean-83726.herokuapp.com/" repoLink="https://github.com/cawleygl/burger"></ProjectCard>
                </Col>
                <Col>
                    <ProjectCard asset={Planner} title="Work Day Scheduler" text="An application that allows the user to schedule out events in a work day, save them for later reference using local storage, and see which events have passed and which are still to come." appLink="https://cawleygl.github.io/workday-planner/" repoLink="https://github.com/cawleygl/workday-planner"></ProjectCard>
                </Col>
                <Col>
                    <ProjectCard asset={Notes} title="Note Taker" text="An application that allows users to take and save notes using Node.js and Express." appLink="https://quiet-shelf-37036.herokuapp.com/" repoLink="https://github.com/cawleygl/note-taker"></ProjectCard>
                </Col>


            </Row>
        </Container>
    )
}

export default PortfolioPage
