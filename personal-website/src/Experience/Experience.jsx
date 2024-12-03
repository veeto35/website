function Experience() {
    return (
        <>
        <div>
            <h1 className="w-[80%] m-auto text-4xl">Experience</h1>
            <div className="mt-6 border border-slate-500 w-[60%] m-auto ">
                <div className="w-full m-auto flex justify-between">
                    <div className="flex flex-col w-full">
                        <h1 className="w-full pl-4 text-xl">Application Support</h1>
                        <h2 className="w-full pl-4 text-lg">Crossjoin Solutions</h2>
                    </div>
                    <h2 className="w-full text-xl text-right pr-4">Nov 2023 - Present</h2>
                </div>
                <div id="description" className="w-full">
                    <p className="w-[80%] m-auto">
                        Ensure the performance of daily health checks of the applications, scripts,and infrastructure by support team.
                        Document all the new processes and troubleshooting processes.Responsible for installing, configuring, and administering application servers.
                        Responsible to monitor DB instances, primarily Postgres databases.Responsible with aiding other teams to create or/and configure new instance.Responsible with the appropriate backups for all of the instances of the application.
                    </p>
                </div>
            </div>
        </div>
        <div className="mb-4">
           
            <div className="mt-6 border border-slate-500 w-[60%] m-auto ">
                <div className="w-full m-auto flex justify-between">
                    <div className="flex flex-col w-full">
                        <h1 className="w-full pl-4 text-xl">Internship</h1>
                        <h2 className="w-full pl-4 text-lg">Sistrade</h2>
                    </div>
                    <h2 className="w-full text-xl text-right pr-4">Mar 2022 - Jul 2022</h2>
                </div>
                <div id="description" className="w-full">
                    <p className="w-[80%] m-auto">
                    Create and document the system design. Use of HTML,CSS, Javascript with BabylonJS to create a webpage with 3D.
                     Creating models and interaction within the scene. Use of MongoDB with NodeJS to create a backend for the Digital Twin. 
                     Create and develop animation for the interaction with the objects in scene. Utilize and configure camera controls to ensure a smooth navigation inside the scene.</p>
                </div>
            </div>
        </div>
        <br />
        </>
    )
}

export default Experience
