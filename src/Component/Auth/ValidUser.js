import {connect} from "trim-redux";
import {isValidUser} from "../../setup/utility/isValidUser";

// updated with not null token
const ValidUser = props => {
    const result = () => {
        if (typeof props.children === "function")
            return props.children(props.localUser.detail)
        else
            return props.children;
    };

    return isValidUser() ? result() : ''
};

export default connect(s => ({localUser: s.localUser}))(ValidUser);
