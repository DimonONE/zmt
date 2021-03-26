import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editStatus: false,
    }

    activeEditStatus(){
        this.setState({
            editStatus: true
        })
    }

    deactiveEditStatus(){
        this.setState({
            editStatus: false
        })
    }

    render(){
        return( 
            <div>
                <span><h4> ▼ EditStatus ▼ </h4></span>
                {this.state.editStatus
                    ? <div>
                        <input autoFocus={true} onBlur={this.deactiveEditStatus.bind(this)} value={this.props.status}/>
                     </div>
                    : <span onDoubleClick={this.activeEditStatus.bind(this)}>{this.props.status}</span>

                }
            </div>
        ) 
    }
}

export default ProfileStatus;