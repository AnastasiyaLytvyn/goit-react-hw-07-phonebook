import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://63db9930a3ac95cec5a5aed8.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fethcAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(`/contacts`, contact);

      toast.success(`Contact ${response.data.name} added`, {
        style: {
          border: '1px solid #20aa25',
          color: '#20aa25',
          width: '275px',
          fontSize: '14px',
        },
        iconTheme: {
          primary: '#20aa25',
          secondary: '#FFFAEE',
        },
        duration: 2000,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactsId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactsId}`);

      toast.success(`Contact ${response.data.name} deleted`, {
        style: {
          border: '1px solid #2011a1',
          color: '#2011a1',
          width: '275px',
          fontSize: '14px',
        },
        iconTheme: {
          primary: '#2011a1',
          secondary: '#FFFAEE',
        },
        duration: 2000,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
