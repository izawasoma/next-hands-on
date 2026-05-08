import { Mc } from "@/app/api/allnight/mc/route";

const getMcList = async () => {
    const response = await fetch('http://localhost:3000/api/allnight/mc');
    const data = await response.json();
    return data;
}

const AllNightMcPage = async () => {
    const mcList = (await getMcList()).mcList as Mc[];
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Mail</th>
                </tr>
            </thead>
            <tbody>
                {mcList.map((mc) => (
                    <tr key={mc.id}>
                        <td>{mc.id}</td>
                        <td>{mc.name}</td>
                        <td>{mc.mail}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default AllNightMcPage;
