import { useState, React, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Missing from '../pages/Missing';
import ContentPage from '../pages/ContentPage';
import NewContent from '../pages/NewContent';
import EditContent from '../pages/EditContent';
import Search from '../components/Search';
import { useSort } from '../hooks/useSort';
import { format } from 'date-fns';
import { Notify, Report } from 'notiflix';
import { useAxios } from '../hooks/axios/useAxios';

const AppRouter = () => {
  const [options, setOptions] = useState({
    url: sessionStorage.getItem('url') || '/posts', //or  useEffect(() => { sessionStorage.setItem('url', '/posts');}, []);
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const navigate = useNavigate();
  const { isLoading, fetchError, items } = useAxios(options, setOptions);
  const [searchValue, setSearchValue] = useState('');
  const searchResults = useSort(items, searchValue);

  const handleSubmit = (e, postTitle, postBody) => {
    e.preventDefault();

    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };

    const option = {
      url: sessionStorage.getItem('url') || '/posts',
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    };

    setOptions(option);
    Report.success('Success', 'Item successfully added');
    navigate('/');
    //Notify.success('Items added successfully');
    //document.location.reload();
  };

  const handleDelete = id => {
    setOptions({
      //url: `/posts/${id}`,
      url: `${sessionStorage.getItem('url')}/${id}` || `/posts/${id}`,
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    Report.success('Success', 'Item successfully DELETE');
    navigate('/');
  };

  const handleEdit = async (e, postTitle, postBody, id) => {
    e.preventDefault();
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: postTitle, datetime, body: postBody };

    const options = {
      method: 'PATCH', //PUT , PATCH updated
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    };

    //await apiRequest(`${API_URL}${id}`, options);
    //Notify.success('Items added successfully');
    Report.success('Success', 'Item successfully updated');
    //setOptions(options);
    navigate('/');
  };

  return (
    <>
      <Header title="React JS Blog" />
      <Routes>
        <Route
          index // or path="/"
          element={
            <>
              <Search
                setSearchValue={setSearchValue}
                setOptions={setOptions}
                options={options}
              />
              <Home
                post={searchResults}
                isLoading={isLoading}
                fetchError={fetchError}
              />
            </>
          }
        />

        <Route path="contents">
          <Route index element={<NewContent handleSubmit={handleSubmit} />} />
          <Route
            path=":id"
            element={<ContentPage posts={items} handleDelete={handleDelete} />}
          />

          <Route
            path="edit/:id"
            element={<EditContent posts={items} handleEdit={handleEdit} />}
          />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </>
  );
};

export default AppRouter;
