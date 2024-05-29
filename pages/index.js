
import { useState } from "react";

export default function Home({ allPosts }) {
  const [data, setData] = useState({});
  console.log(allPosts);

  const dataHandler = (e) => {
    setData(data => ({ ...data, [e.target.name]: e.target.value }))
  }

  const clickHandler = async () => {
    let res = await fetch("http://localhost:3001/api/customers", {
      method: "POST",
      body: JSON.stringify({
        title: data.title,
        content: data.content,
      }),
    });
    res = await res.json();
    console.log(res);
  }

  return (
    <div>
      <input onChange={dataHandler} name="title" />
      <input onChange={dataHandler} name="content" />
      <button onClick={clickHandler}>click</button>
    </div>
  );
}

export async function getServerSideProps(context) {
  let res = await fetch("http://localhost:3001/api/customers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let allPosts = await res.json();

  return {
    props: { allPosts },
  };
}