"use client";

import { useGetProductByNameQuery } from "@/redux/services/api";
import { UserData } from "@/types/userData";

export default function Home() {
    const { data, error, isLoading } = useGetProductByNameQuery("");

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        // return <div>Error: {JSON.stringify(error)}</div>;
        return <div>Error While Fetching Data</div>;

    }

    return (
        <div>
            {data?.map((item: UserData) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.email}</p>
                    <p>{item.company.catchPhrase}</p>
                    <p>{item.address.city}</p>
                </div>
            ))}
        </div>
    );
}
