import {Typography} from 'antd';
import Error404Image from 'images/404.svg';

const Error404 = () => {
    return (
        <>
            <Typography.Title level={1} style={{'textAlign': 'center'}}>
                404: The page you are looking for isn’t here
            </Typography.Title>
            <Typography.Title level={5} style={{'textAlign': 'center'}}>
                You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation
            </Typography.Title>
            <img src={Error404Image} style={{'margin': '30px auto', 'width': '50%', 'display': 'block'}} />
        </>
    );
};

export default Error404;
