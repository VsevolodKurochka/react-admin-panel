import {
    AreaChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area
} from 'recharts';
import {Colors} from 'utils';

const dataTeam = [
    {
        "name": 2008,
        "Tasks": 696,
        "Cards": 571
    },
    {
        "name": 2009,
        "Tasks": 226,
        "Cards": 337
    },
    {
        "name": 2010,
        "Tasks": 646,
        "Cards": 598
    },
    {
        "name": 2011,
        "Tasks": 800,
        "Cards": 235
    },
    {
        "name": 2012,
        "Tasks": 640,
        "Cards": 969
    },
    {
        "name": 2013,
        "Tasks": 411,
        "Cards": 276
    },
    {
        "name": 2014,
        "Tasks": 262,
        "Cards": 957
    },
    {
        "name": 2015,
        "Tasks": 656,
        "Cards": 289
    },
    {
        "name": 2016,
        "Tasks": 513,
        "Cards": 760
    },
    {
        "name": 2017,
        "Tasks": 900,
        "Cards": 700
    },
    {
        "name": 2018,
        "Tasks": 269,
        "Cards": 548
    },
    {
        "name": 2019,
        "Tasks": 350,
        "Cards": 600
    },
    {
        "name": 2020,
        "Tasks": 692,
        "Cards": 680
    }
];

const DashboardTeam = () => {
    return (
        <ResponsiveContainer height={300}>
            <AreaChart
                data={dataTeam}
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
                <Area
                    type="monotone"
                    dataKey="Cards"
                    stroke={Colors.grass}
                    fill={Colors.grass}
                    dot={{ fill: Colors.grass }}
                    activeDot={{ r: 5, strokeWidth: 0 }}
                />
                <Area
                    type="monotone"
                    dataKey="Tasks"
                    stroke={Colors.blue}
                    fill={Colors.blue}
                    dot={{ fill: Colors.blue }}
                    activeDot={{ r: 5, strokeWidth: 0 }}
                />

            </AreaChart>
        </ResponsiveContainer>
    );
};

export default DashboardTeam;
