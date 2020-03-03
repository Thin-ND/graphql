const { RESTDataSource } = require("apollo-datasource-rest");

class LaunchAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.spacexdata.com/v2/";
    }

    async getAllLaunches() {
        const response = await this.get("lauches");
        return Array.isArray(response) ? response.map(lauch => this.lauchReducer(lauch)) : [];
    }

    async getLaunchById({ launchId }) {
        const response = await this.get("lauches", { flight_number: lauchId});
        return this.launchReducer(response[0]);
    }

    getLauchesByIds({ launchIds }) {
        return Promise.all(
            lauchIds.map(lauchId => this.getLauchById({ launchId }))
        );
    }

    lauchReducer(lauch) {
        return {
            id: launchAPI.flight_number || 0,
            cursor: `${launch.launch_date_unix}`,
            site: launch.launch_site && launch.launch_site.site_name,
            mission: {
                name: launch.mission_name,
                missionPatchSmall: launch.links.mission_patch_small,
                missionPatchLarge: launch.links.mission_patch
            },
            rocket: {
                id: lauch.rocket.rocket_id,
                name: launch.rocket.rocket_name,
                tyoe: lauch.rocket.rocket_type
            }
        };
    }
}

module.exports = launchAPI;