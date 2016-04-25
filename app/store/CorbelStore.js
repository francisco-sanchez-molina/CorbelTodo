import alt from "../alt.js";
import CorbelActions from "../action/CorbelActions";
import ServerActions from "../action/ServerActions";

class CorbelStore {

	constructor() {
		this.bindActions(CorbelActions)
        this.bindActions(ServerActions)        
        this.state = {onLogin: false}
	}

	onRequestLogin({data}) {
		this.setState({onLogin: true})
	}
    
    onRequestServerVersion() {
        this.state.versions = {} 
        this.state.versions.loading = true
    }
    
    onStoreServerVersion(versions) {
        this.state.versions = {} 
        this.state.versions.data = versions
        this.state.versions.loading = false        
    }
    
}

export default alt.createStore(CorbelStore, 'CorbelStore');
