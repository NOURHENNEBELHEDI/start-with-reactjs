
import "./buttonComponent.css";

function ButtonComponent({name, fn}) {
  return (
    <button onClick={fn}>
        {name}
    </button>
  );
}

export default ButtonComponent;
