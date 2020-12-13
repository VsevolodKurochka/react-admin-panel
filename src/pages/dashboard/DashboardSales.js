import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import {Colors} from 'utils';

const data = [
    {
        "name": 2008,
        "Clothes": 438,
        "Food": 236,
        "Electronics": 320
    },
    {
        "name": 2009,
        "Clothes": 341,
        "Food": 22,
        "Electronics": 395
    },
    {
        "name": 2010,
        "Clothes": 495,
        "Food": 270,
        "Electronics": 337
    },
    {
        "name": 2011,
        "Clothes": 33,
        "Food": 554,
        "Electronics": 337
    },
    {
        "name": 2012,
        "Clothes": 456,
        "Food": 337,
        "Electronics": 500
    },
    {
        "name": 2013,
        "Clothes": 383,
        "Food": 375,
        "Electronics": 548
    },
    {
        "name": 2014,
        "Clothes": 406,
        "Food": 116,
        "Electronics": 308
    },
    {
        "name": 2015,
        "Clothes": 468,
        "Food": 360,
        "Electronics": 315
    }
];

const DashboardSales = () => {
    return (
        <ResponsiveContainer height={300}>
            <LineChart
                data={data}
            >
                <CartesianGrid
                    vertical={false}
                    stroke={Colors.borderBase}
                    strokeDasharray="3 3"
                />
                <XAxis
                    dataKey="name"
                    axisLine={{ stroke: Colors.borderBase, strokeWidth: 1 }}
                    tickLine={false}
                />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend verticalAlign="top" align={'right'} />
                <Line
                    type="monotone"
                    dataKey="Food"
                    stroke={Colors.purple}
                    strokeWidth={3}
                    dot={{ fill: Colors.purple }}
                    activeDot={{ r: 5, strokeWidth: 0 }}
                />
                <Line
                    type="monotone"
                    dataKey="Clothes"
                    stroke={Colors.red}
                    strokeWidth={3}
                    dot={{ fill: Colors.red }}
                    activeDot={{ r: 5, strokeWidth: 0 }}
                />
                <Line
                    type="monotone"
                    dataKey="Electronics"
                    stroke={Colors.green}
                    strokeWidth={3}
                    dot={{ fill: Colors.green }}
                    activeDot={{ r: 5, strokeWidth: 0 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default DashboardSales;
