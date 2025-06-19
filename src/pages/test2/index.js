export default function Component() {
  const id = 17;  
  const hacercosa = async () => {
    const url = `/api/deleteActivity?id_activity=${id}`;
    console.log(url);
    fetch(url);
  };
  return (
    <>
    <button onClick={hacercosa}>BORRAR ACTIVIDAD {id}</button>
    </>
  )
}