function Table(props){
    console.log(props.data.data)
    return(
        <table>
            <thead>
                <tr>
                    {props.headers.map((header)=>{
                        return <th key={header}>{header} </th>;
                    })}
                </tr>
            </thead>
            <tbody>
                    {
                        props.data.map((user)=>{
                        
                        return (
                            
                            <tr key= {user.id.value}>
                                <td>{user.name.first}</td>
                                <td>{user.name.last}</td>
                                <td>{user.email}</td>
                                <td>{user.cell}</td>
                            </tr>
                        );
                        })}
            </tbody>
        </table>
    );
}

export default Table;