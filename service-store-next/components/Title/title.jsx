const Title = (props) => {
  const { title } = props;

  return (
    <div className="row">
      <h2>{title}</h2>
      <p>Διαθέσιμες προτάσεις</p>
    </div>
  );
};

export default Title;
