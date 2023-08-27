import { Component } from "react";

class ErrBoundary extends Component {
    state = {
        err: false,
    }

    static getDerivedStateFromError() {
        return {err: true}
    }

    // componentDidCatch(error, info) {
    //     this.setState({err: true})
    // }

    render() {
        if (this.state.err) {
            return (
                <h2> Something bad is come to happened </h2>
            )
        }
        return this.props.children
    }

}
export default ErrBoundary