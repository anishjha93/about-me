import React, { Component } from 'react'

class FavouriteTech extends Component{
    render(){
        if(this.props.data){
            var techMessage = this.props.data.about_tech;
            // var favtech = this.props.data.favouritetech.map(function(favtech){
            //     return <li key={favtech.logo}><img className="logo"  src={"images/"+ favtech.logo} alt="" />
            //     <p className="info">{favtech.name}</p>
            //     <p>{favtech.description}</p></li> })
            var favtech = this.props.data.favouritetech.map(function(favtech){
                return <div className="columns feature-item"><img className="favtech"  src={"images/"+ favtech.logo} alt="" />
            <h5>{favtech.name}</h5><p>{favtech.description}</p></div>
            }) 
            
        }
        return(
            <section id="favtech">
                <div className="row">
                    <div className="three columns header-col">
                        <h3><span>Favourite Tech</span></h3>
                    </div>
                    <div>
                        <div className="nine columns main-col favtech">
                            {/* <h5>{techMessage}</h5> */}
                            <p className="lead center">{techMessage}</p>
                        </div>
                        <ul className="bgrid-quarters s-bgrid-thirds cf">
                            {favtech}
                        </ul>
                        
                    </div>	   
                </div>
            </section>
        )
    }
}

export default FavouriteTech;



{/* <section id="favtech">
                <div className="row">
                    <div className="row favtech">
                        <div className="three columns">
                            <h1><span>Favourite Tech</span></h1>
                        </div>
                    </div>
                <div className="nine columns main-col favtech">
                <div>
                    <ul><li><span>{techMessage}</span></li></ul>
                    <ul>
					  {favtech}
					</ul>
				</div>	   
            </div>
        </div>
            </section> */}