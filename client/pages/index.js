import React, { useState, useEffect } from "react";
import Axios from "axios";
import Pagination from "./components/pagination";
const server = "http://127.0.0.1:3001";

export default function Home() {
    // const [serverResponse, setServerResponse] = useState("");
    // const [employeeData, setEmployeeData] = useState([]);
    // useEffect(() => {
    //     Axios.get(`${server}/test`).then((response) => {
    //         setServerResponse(response.data);
    //     });

    //     Axios.get(`${server}/api/employee/all`).then((response) => {
    //         setEmployeeData(response.data);
    //     });
    // }, []);

    return (
        <div className="container mx-auto m-60">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            ID
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Phone
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination />
        </div>
    );
}
