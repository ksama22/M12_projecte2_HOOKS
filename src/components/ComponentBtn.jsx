export const ComponentButton = (props) => {
  return <button onClick={props.funcio}>{props.name}</button>;
};

export const ComponentResultat = (props) => {
  return <div>{props.age} años</div>;
};
