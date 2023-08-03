import React from 'react';
import Content from './Content';
import Header from './Header'
import Footer from './Footer'
import AddForm from './AddForm';
import Search from './Search';
const Home = ({ 
    items, handleCheck, handleDelete,
    newItem,setNewItem,handleAdd  ,search,setSearch,
    fetchError,setFetchError,isLoading,setisLoading
}
) => {
    return (
        <div className="main">
            <div className='main_in' >
                <div className="head">
                    <Header />
                </div>
                <div className="form">
                    <AddForm
                      newItem   ={newItem}
                      setNewItem={setNewItem}
                      handleAdd ={handleAdd}
                    />
                </div>
                <div className="search">
                    <Search 
                    search={search}
                    setSearch={setSearch}
                    />
                </div>
                <main>
                    {/* {isLoading && <p>Loading.....</p> } */}
                    {/* {fetchError && <p>{`Error : ${fetchError}`}</p> } */}
                    <Content
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete} />
                </main>
                <div className="foot">
                    <Footer length={items.length} />
                </div>
            </div>
        </div>
    )
}

export default Home