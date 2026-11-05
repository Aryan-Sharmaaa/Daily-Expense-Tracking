import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';


function CategoryExpenseChart({ categorySummary }) {
    const COLORS = ["#E07A5F", "#2F8079", "#D9B26A", "#8CC2B8", "#C05A41", "#A68A5B", "#1F5F59", "#F2B5A1", "#B8A98A"];

    return (
        <div className='chart'>
            <ResponsiveContainer>
                <PieChart width={50} height={100}>
                    <Pie
                        data={categorySummary}
                        cx={280}
                        cy={135}
                        innerRadius={80}
                        outerRadius={110}
                        fill="#3F8F86"
                        paddingAngle={0}
                        dataKey="amount"
                        label
                    >
                        {categorySummary.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend dataKey='category' />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>


    )
}

export default CategoryExpenseChart;