const propsExample = props => {
    const propsComp = {

        number : 5,
        city : "Manchester",
        street: "long street",
        postcode: "M11 3WE"
    }
    
    return (

<div>
    <p>
        <h2>Address</h2>
        <h3>Number: {propsComp.number}</h3>
        <h3>City: {propsComp.city}</h3>
        <h3>Street: {propsComp.street}</h3>
        <h3>Postcode: {propsComp.postcode}</h3>
    </p>
</div>
    );
};
export default propsExample;