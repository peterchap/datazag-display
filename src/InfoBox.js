function InfoBox({ title, data }) {
    return (
        <div style={{ border: '1px solid gray', padding: '1rem', margin: '1rem' }}>
            <h2>{title}</h2>
            {Object.keys(data).map(key => (
                <div key={key}>
                    <strong>{key}:</strong> {data[key]}
                </div>
            ))}
        </div>
    );
}
export default InfoBox;
