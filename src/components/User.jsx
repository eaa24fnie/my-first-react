function User ({mail, name, image}) {
    return (
    <div className="user-card">
        <img src={image} alt={name} />
        <h2 className="h2">{name}</h2>
        <p>{mail}</p>
    </div>
    );
  }

  export default User;