
import corbel from 'corbel-js'

import config from '../config.js'

import ServerActions from "../action/ServerActions"


export default class CorbelService {

  getModuleEndpoint(module) {
		var urlBase = config.url;
		return urlBase.replace('{{module}}', module).replace(/\/v.*/, '');
	}

  getVersions() {
		var modules = ['iam', 'resources', 'assets', 'evci', 'scheduler']
		var that = this
    var versions = [];
		try {
      var promises = modules.map(module => {
				var args = {
					url: this.getModuleEndpoint(module) + '/version',
					method: corbel.request.method.GET
				};
				return corbel.request.send(args)
					.then(result => {
            versions.push({ module: module, version: result.data['build.version'] });
					});
			});

      return Promise.all(promises).then(function () {
				ServerActions.storeServerVersion(versions)
      });
		} catch (error) { }
	}

}
