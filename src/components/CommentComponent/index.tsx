function Comment ({data} :any) {
    return (
        <>
            {data.map((item: any) => (
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.email}</p>
                </div>
            ))}
        </>
    )
}

export default Comment;