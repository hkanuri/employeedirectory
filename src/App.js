import React from 'react'
import { useState, useEffect } from 'react'
import getUsers from "./utils/API"
import Search from "./components/Search"
import Table from "./components/Table"

function App  () {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const tableHeaders = ["First", "Last", "Email", "Phone"];

  // useEffect(() => {
  //   getUsers().then((data) => {
  //     // console.log(data)
  //     setUsers(data)
  //   })
  // }, [])

  useEffect(()=>{
    async function getUsers(){
      const response = await fetch(
        "https://randomuser.me/api/?results=10"
      );
      const data = await response.json();
      console.log(data);
      setUsers(data.results);
    }
    getUsers();

  },[]);


  // componentDidMount() {
  //   API.getRandomEmployee()
  //     .then(res => setUsers({ users: res.data.message }))
  //     .catch(err => console.log(err));
  // }
  // console.log(users);



  useEffect(() => {
    if (search) {
      const filtered = users.filter((user) => {
        if (
          user.name.first.toLowerCase().includes(search) ||
          user.name.last.toLowerCase().includes(search)
        ) {
          return user;
        };

        console.log(filtered);
        setFilteredUsers(filtered);
      }
        , [search, users])
    };
  })

  return (
    <div>
      <Search search={Search} setSearch={setSearch} />
      <Table headers={tableHeaders} data={!search ? users : filteredUsers} />

    </div>
  );
}



export default App
