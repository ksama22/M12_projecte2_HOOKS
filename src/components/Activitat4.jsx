/* Aplica la funcio canvia */
export const ComponenButtonCanviColor = (props) => {
  return <button onClick={props.funcio}>Canvi</button>;
};

/* Aplica el color pasat per paramentre*/
export const ComponentTextColor = (props) => {
  return <div style={{ color: props.ncolor }}> Canvi de color</div>;
};
