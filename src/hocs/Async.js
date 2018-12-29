import { Component } from "react";
import { withDataClient } from "../dataprovider";

export default withDataClient(class Async extends Component {
    constructor (props) {
        super(props);
        const { client, query, name, params } = props;
        const data = client.getCached(name, params)
        this.makeRequest = params => client.makeRequest(name, query, params);
        this.runLatestQuery = takeLatest(
            this.makeRequest, 
            this.onSuccess, 
            this.onError
        );
        this.state = {
            loading: !data,
            error: "",
            data,
        };
    }
    componentWillMount() {
        if (this.state.loading) this.runLatestQuery(this.props.params);
    }
    componentWillUpdate(nextProps) {
        if (this.props.params !== nextProps.params) {
            this.setState({ loading: true, error: "" })
            this.runLatestQuery(nextProps.params);
        }
    }
    componentWillUnmount() {
        this.runLatestQuery.cancel();
    }
    onSuccess = (data) => {
        if (this.updater.isMounted()) {
            this.setState({ loading: false, data });
        }
    }
    onError = (e) => {
        if (this.updater.isMounted()) {
            this.setState({ loading: false, error: e.message });
        }
    }
    render() {
        return this.props.children(this.state);
    }
});

function takeLatest(fn, onSuccess, onError) {
    let canceled = false;
    let latestargs;

    function stash(args) {
        latestargs = args;

        return v => {
            if (!canceled && latestargs === args) {
                onSuccess(v);
            }
        };
    }

    const latest = (...args) => {
        return fn(...args)
        .then(stash(args))
        .catch(e => {
            if (!canceled) onError(e);
        });
    };

    latest.cancel = () => canceled = true;
    latest.resume = () => canceled = false;

    return latest;
}