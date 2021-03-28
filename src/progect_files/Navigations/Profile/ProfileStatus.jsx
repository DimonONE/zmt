import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editStatus: false,
        status: this.props.status === null ? "status" : this.props.status,
    }

    activeEditStatus = () =>{
        this.setState({
            editStatus: true
        })
    }

    deactiveEditStatus = () =>{
        this.setState({
            editStatus: false
        })
        this.props.updateStatus(this.state.status)
    }

    editStatusMode = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    render(){
        return( 
            <div>
                <span><h4> ▼ EditStatus ▼ </h4></span>
                {this.state.editStatus
                    ? <div>
                        <input onChange={this.editStatusMode} autoFocus={true} onBlur={this.deactiveEditStatus} value={this.state.status}/>
                     </div>
                    : <span onDoubleClick={this.activeEditStatus}>{this.props.status}</span>

                }
            </div>
        ) 
    }
}

export default ProfileStatus;