/* Button que aplica la funcio que te com a parametre*/
export const ComponentButton = (props) => {
  return <button onClick={props.funcio}>{props.name}</button>;
};

/* Mostra el text del prop*/
export const ComponentResultat = (props) => {
  return <div>{props.age} años</div>;
};
