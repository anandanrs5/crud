import { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import apiRequest from './apiRequest';

function App() {
  const Api_Url = "http://localhost:3500/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(Api_Url)
        if (!response.ok) throw Error("Data not Received")
        const listItem = await response.json()
        setItems(listItem);
        // console.log(listItem);
        setFetchError(null);
      } catch (err) {
        // console.log(err.stack);
        setFetchError(err.Error);
        console.log();
      }
      finally {
        setisLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    })

  }, [])
  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(addNewItem)
    }
    const result = await apiRequest(Api_Url, postOptions)
    if (result) setFetchError(result)
    const listItems = [...items, addNewItem]
    setItems(listItems)
    console.log(result);
  }
  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item);
      console.log(listItems);
    const myItem = listItems.filter(item => item.id === id)
    const updateOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked: myItem[0].checked })
    }
    const reqUrl = `${Api_Url}/${id}`
    const result = await apiRequest(reqUrl, updateOptions)
    if (result) setFetchError(result)
    setItems(listItems)    
}
  const handleDelete = async(id) => {
    const listItems = items.filter((item) =>
      item.id !== id);
      const deleteOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(listItems)
      }
      const reqUrl = `${Api_Url}/${id}`
      const result = await apiRequest(reqUrl, deleteOptions)
      if (result) setFetchError(result)
      // const listItems = [...items, addNewItem]
      setItems(listItems)
      console.log(result);
    console.log(listItems);
  }
  const handleAdd = (e) => {
    // e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setItems('');
  }
  
  return (
    <div>
      <Home
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        newItem={newItem}
        setNewItem={setNewItem}
        handleAdd={handleAdd}
        search={search}
        setSearch={setSearch}
        fetchError={setFetchError}
        isLoading={setisLoading}
      />

    </div>
  );
}

export default App;
