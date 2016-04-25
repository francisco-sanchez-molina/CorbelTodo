import alt from '../alt';

class ServerActions {
    
	constructor() {
		this.generateActions()
	}
    
    storeServerVersion(version) {
        return (dispatch) => {
			dispatch(version)
		}
    }


}

export default alt.createActions(ServerActions);
