import React, { Component } from 'react';
import "./Profile.css"

class Profile extends Component{
    render(){
        return(
            //displays all of the information from data array passed in from Navbar
            <div className="profileCard">
                <h1 className="index">{this.props.obj.id}/25</h1> 
                <div className="profileBody">
                      <h1 className="name">{this.props.obj.name.first} {this.props.obj.name.last}</h1>
                    <h3 className="location">From: {this.props.obj.city}, {this.props.obj.country}</h3>
                    <h3 className="job">Job Title: {this.props.obj.title}</h3>
                    <h3 className="employer">Employer: {this.props.obj.employer}</h3>
                    <br/>
                    <h3 className="movies">Favorite Movies: </h3>
                    <ol className="movieList">
                        <li>{this.props.obj.favoriteMovies[0]}</li>
                        <li>{this.props.obj.favoriteMovies[1]}</li>
                        <li>{this.props.obj.favoriteMovies[2]}</li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Profile;