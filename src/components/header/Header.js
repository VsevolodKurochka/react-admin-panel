import {Layout, Menu} from 'antd';
import Logo from 'images/logo.svg';

const Header = () => {
    return (
        <Layout.Header className="header" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <img src={Logo} style={{'width': '40px'}} />
        </Layout.Header>
    );
};

export default Header;
