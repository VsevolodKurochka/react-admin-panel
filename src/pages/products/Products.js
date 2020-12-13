import {Row, Card, Avatar, Breadcrumb, Col} from 'antd';
import { FieldTimeOutlined, DownloadOutlined } from '@ant-design/icons';
import DropboxImage from './images/dropboxhero.jpg';
import MediumImage from './images/medium.jpg';
import SlackImage from './images/slack.jpg';
import LyftImage from './images/lyft.png';
import GitImage from './images/github.jpg';
import SqImage from './images/sq.jpg';
const { Meta } = Card;

const data = [
    {
        title: 'Dropbox',
        description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud',
        image: DropboxImage,
        downloads: '594',
        updated: '1'
    },
    {
        title: 'Medium Corporation',
        description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
        image: MediumImage,
        downloads: '767',
        updated: '3'
    },
    {
        title: 'Slack',
        description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
        image: SlackImage,
        downloads: '857',
        updated: '1'
    },{
        title: 'Lyft',
        description: 'Lyft is an on-demand transportation company based in San Francisco, California.',
        image: LyftImage,
        downloads: '406',
        updated: '2'
    },
    {
        title: 'GitHub',
        description: 'GitHub is a web-based hosting service for version control of code using Git.',
        image: GitImage,
        downloads: '333',
        updated: '1'
    },
    {
        title: 'Squarespace',
        description: 'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
        image: SqImage,
        downloads: '406',
        updated: '2'
    },
];

const Products = () => {
    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Products</Breadcrumb.Item>
            </Breadcrumb>
            <Row gutter={16}>
                {
                    data.map((product) => {
                        return (
                            <Col span={8} style={{'marginBottom': '20px'}}>
                                <Card
                                    cover={<img style={{'height': '250px', 'objectFit': 'cover'}} alt={product.title} src={product.image}/>}
                                    actions={[
                                        <><DownloadOutlined key="download" />{product.downloads} Downloads</>,
                                        <><FieldTimeOutlined />Updated {product.updated} ago</>,
                                    ]}>
                                    <Meta
                                        title={product.title}
                                        description={product.description}
                                    />
                                </Card>
                            </Col>
                        );
                    })
                }

            </Row>
        </>
    );
};

export default Products;
