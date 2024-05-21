import { BarChart, axisClasses } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts/PieChart";

export default function({data}) {
    /**
     * Rendering
     */
    return (
        <>
            <PieChart
            series={[
                {
                data: data,
                },
            ]}
            height={200}
            />
        </>
    )
}