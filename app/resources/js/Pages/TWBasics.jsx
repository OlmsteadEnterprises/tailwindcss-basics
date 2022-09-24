import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function TWBasics(props) {
    return (
        <>
            <AuthenticatedLayout auth={props.auth} errors={props.errors}>
                <div className="w-1/2 h-10 bg-red-500">
                    this is a div element
                </div>
                <div className="flex flex-wrap bg-yellow-500 w-auto">
                    <div className="w-80 h-10 bg-red-500">1</div>
                    <div className="w-80 h-10 bg-green-500">2</div>
                    <div className="w-80 h-10 bg-blue-500">3</div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
