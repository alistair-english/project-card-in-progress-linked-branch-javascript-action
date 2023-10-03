const core = require('@actions/core');
const github = require('@actions/github');

const getActionData = require('./get-action-data');
const generateProjectQuery = require('./generate-project-query');
const generateMutationQuery = require('./generate-mutation-query');

(async () => {
    try {
        // const token = core.getInput('repo-token', { required: true });
        // const project = core.getInput('project', { required: true });
        // const column = core.getInput('column', { required: true });

        const { eventName, payload } = github.context

        if (eventName != 'create') {
            throw new Error('Can only be run on create event!');
        }

        const { ref, ref_type } = payload

        const branch = ref.split('/')[ref.split('/').length - 1]

        core.info(branch)
        console.log(branch)

        // // Create a method to query GitHub
        // const octokit = new github.GitHub(token);

        // // Get the column ID from searching for the project and card Id if it exists
        // const projectQuery = generateProjectQuery(url, eventName, project);

        // core.debug(projectQuery);

        // const { resource } = await octokit.graphql(projectQuery);

        // core.debug(JSON.stringify(resource));

        // // A list of columns that line up with the user entered project and column
        // const mutationQueries = generateMutationQuery(resource, project, column, nodeId, action);
        // if ((action === 'delete' || action === 'archive' || action === 'add') && mutationQueries.length === 0) {
        //     console.log('✅ There is nothing to do with card');
        //     return;
        // }

        // core.debug(mutationQueries.join('\n'));

        // // Run the graphql queries
        // await Promise.all(mutationQueries.map(query => octokit.graphql(query)));

        // if (mutationQueries.length > 1) {
        //     console.log(`✅ Card materialised into to ${column} in ${mutationQueries.length} projects called ${project}`);
        // } else {
        //     console.log(`✅ Card materialised into ${column} in ${project}`);
        // }
    } catch (error) {
        core.setFailed(error.message);
    }
})();