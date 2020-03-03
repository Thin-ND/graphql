let arr = [];
module.exports = {
    Query: {
        launch: (root, args, context, info) => {
            let launch = {
                id: args.id,
                site: "this is demo site",
                isBooked: true
            }

            //do create/update/deleted
            return launch;
        },
        launches: () => {
            return arr;
        }
    },
    Mutation: {
        createLaunch: (_, args) => {

            arr = [];
            let launch = {
                id: args.launch.id,
                site: args.launch.site,
                isBooked: args.launch.isBooked,
            }
            console.log(args);
            arr.push(launch);
            let launchRes = {
                success: true,
                message: "hihihi",
                data: launch
            }
            return launchRes;
        }
    },
    Launch: (root) => {
        return {
            id: root.id,
            site: root.site,
            isBooked: root.isBooked
        }
    },
    LaunchInput: (root) => {
        console.log(root)
        return {
            id: root.id,
            site: root.site,
            isBooked: root.isBooked
        }
    }
}