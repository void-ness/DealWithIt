const ResourceLink = ({ children, link, id }) => {
    return (
        <>
            <li className="mb-5 p-3 rounded-md shadow-md hover:translate-x-3 trasnsition-all duration-300 ease-in bg-blue-100">
                <a className="text-2xl font-light" href={link}>
                    <b>{id}.</b> {children}
                </a>
            </li>
        </>
    )
};

export default ResourceLink;


