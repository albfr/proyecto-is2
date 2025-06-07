export default function Component() {
  // const email = session.user.email;
  // const name = req.query.name;
  // const min_temp = req.query.min_temp;
  // const max_temp = req.query.max_temp;
  // const wind = req.query.wind;
  // const humidity = req.query.humidity;
  // const uv = req.query.uv;

  // const activity = {
  //   owner: email,
  //   name,
  //   min_temp,
  //   max_temp,
  //   wind,
  //   humidity,
  //   uv
  // };
  // await addActivity(activity);
  const name = "tomar guarana"
  const min_temp = 12;
  const max_temp = 15;
  const wind = 10;
  const humidity = 80;
  const uv = 0;

  const hacercosa = async () => {
    const url = `/api/addActivity?name=${name}&min_temp=${min_temp}&max_temp=${max_temp}&wind=${wind}&humidity=${humidity}&uv=${uv}`;
    console.log(url);
    fetch(url);
  };
  return (
    <>
    <button onClick={hacercosa}>CREAR ACTIVIDAD HACER COSA</button>
    </>
  )
}